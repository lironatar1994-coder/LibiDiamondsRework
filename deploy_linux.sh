#!/usr/bin/env bash

set -euo pipefail

STAGE_ROOT="$(pwd)"
LIVE_ROOT="/root/LibiDiamonds-live"
ROLLBACK_ROOT="/root/LibiDiamonds-live.rollback"
FAILED_ROOT="/root/LibiDiamonds-live.failed"
PROCESS_NAME="libi-diamonds-live"
PORT="${PORT:-3105}"
SITE_URL="https://www.libidiamonds.co.il"
NGINX_AVAILABLE="/etc/nginx/sites-available/libidiamonds.co.il.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/libidiamonds.co.il.conf"

log() { printf '[LIBI] %s\n' "$1"; }
fail() { printf '[LIBI] ERROR: %s\n' "$1" >&2; exit 1; }

[ "$STAGE_ROOT" = "/root/LibiDiamonds-live.next" ] || fail "Unexpected staging path: $STAGE_ROOT"
[ "$LIVE_ROOT" = "/root/LibiDiamonds-live" ] || fail "Unexpected live path"

restore_previous_release() {
  log "Health check failed; restoring the previous release."
  pm2 delete "$PROCESS_NAME" >/dev/null 2>&1 || true
  if [ -d "$LIVE_ROOT" ]; then mv "$LIVE_ROOT" "$FAILED_ROOT"; fi
  if [ -d "$ROLLBACK_ROOT" ]; then
    mv "$ROLLBACK_ROOT" "$LIVE_ROOT"
    cd "$LIVE_ROOT"
    PORT="$PORT" NEXT_PUBLIC_SITE_URL="$SITE_URL" pm2 start npm --name "$PROCESS_NAME" --cwd "$LIVE_ROOT" -- start
    pm2 save >/dev/null
  fi
}

log "Preserving the existing product-media archive."
mkdir -p "$STAGE_ROOT/public/images" "$STAGE_ROOT/public"
if [ -d "$LIVE_ROOT/public/images/products" ]; then
  cp -a "$LIVE_ROOT/public/images/products" "$STAGE_ROOT/public/images/products"
fi
if [ -d "$LIVE_ROOT/public/try-on" ]; then
  cp -a "$LIVE_ROOT/public/try-on" "$STAGE_ROOT/public/try-on"
fi

log "Installing locked dependencies and building the staged release."
cd "$STAGE_ROOT"
npm ci --silent
NEXT_PUBLIC_SITE_URL="$SITE_URL" npm run build

log "Rotating the exact canonical application paths."
rm -rf -- "$ROLLBACK_ROOT" "$FAILED_ROOT"
if [ -d "$LIVE_ROOT" ]; then mv "$LIVE_ROOT" "$ROLLBACK_ROOT"; fi
mv "$STAGE_ROOT" "$LIVE_ROOT"
cd "$LIVE_ROOT"

log "Starting PM2 process $PROCESS_NAME on port $PORT."
pm2 delete "$PROCESS_NAME" >/dev/null 2>&1 || true
if ! PORT="$PORT" NEXT_PUBLIC_SITE_URL="$SITE_URL" pm2 start npm --name "$PROCESS_NAME" --cwd "$LIVE_ROOT" -- start; then
  restore_previous_release
  exit 1
fi
pm2 save >/dev/null

healthy=false
for _ in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:$PORT/" >/dev/null; then healthy=true; break; fi
  sleep 1
done
[ "$healthy" = true ] || { restore_previous_release; fail "Application did not become healthy"; }

log "Writing the canonical nginx proxy."
cat > "$NGINX_AVAILABLE" <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name libidiamonds.co.il www.libidiamonds.co.il;
    return 301 https://www.libidiamonds.co.il$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name libidiamonds.co.il;
    ssl_certificate /etc/letsencrypt/live/libidiamonds.co.il/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/libidiamonds.co.il/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    return 301 https://www.libidiamonds.co.il$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.libidiamonds.co.il;
    ssl_certificate /etc/letsencrypt/live/libidiamonds.co.il/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/libidiamonds.co.il/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    access_log /var/log/nginx/libidiamonds.access.log;
    error_log /var/log/nginx/libidiamonds.error.log;

    location / {
        proxy_pass http://127.0.0.1:3105;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
NGINX

ln -sfn "$NGINX_AVAILABLE" "$NGINX_ENABLED"
nginx -t
systemctl reload nginx

log "Checking local, canonical HTTPS, sitemap and robots endpoints."
curl -fsS "http://127.0.0.1:$PORT/" >/dev/null
curl --noproxy '*' -fsS --resolve "www.libidiamonds.co.il:443:127.0.0.1" "$SITE_URL/" >/dev/null
curl --noproxy '*' -fsS --resolve "www.libidiamonds.co.il:443:127.0.0.1" "$SITE_URL/sitemap.xml" >/dev/null
curl --noproxy '*' -fsS --resolve "www.libidiamonds.co.il:443:127.0.0.1" "$SITE_URL/robots.txt" >/dev/null

log "Deleting the superseded app and disposable caches after successful verification."
rm -rf -- "$ROLLBACK_ROOT" "$FAILED_ROOT" "$LIVE_ROOT/.next/cache"

log "Deployment completed successfully: $SITE_URL"
