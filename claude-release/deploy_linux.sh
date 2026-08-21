#!/usr/bin/env bash

set -euo pipefail

STAGE_ROOT="$(pwd)"
LIVE_ROOT="/root/LibiDiamonds-live"
ROLLBACK_ROOT="/root/LibiDiamonds-live.rollback"
FAILED_ROOT="/root/LibiDiamonds-live.failed"
PROCESS_NAME="libi-diamonds-live"
PORT="${PORT:-3105}"

[ "$STAGE_ROOT" = "/root/LibiDiamonds-live.next" ] || { echo "Unexpected stage path" >&2; exit 64; }

restore_previous() {
  pm2 delete "$PROCESS_NAME" >/dev/null 2>&1 || true
  [ ! -d "$LIVE_ROOT" ] || mv "$LIVE_ROOT" "$FAILED_ROOT"
  if [ -d "$ROLLBACK_ROOT" ]; then
    mv "$ROLLBACK_ROOT" "$LIVE_ROOT"
    cd "$LIVE_ROOT"
    PORT="$PORT" pm2 start npm --name "$PROCESS_NAME" --cwd "$LIVE_ROOT" -- start
    pm2 save >/dev/null
  fi
}

echo "[LIBI] Preserving product media outside the public design tree."
mkdir -p "$STAGE_ROOT/protected-media/products" "$STAGE_ROOT/protected-media/try-on"
if [ -d "$LIVE_ROOT/public/images/products" ]; then cp -a "$LIVE_ROOT/public/images/products/." "$STAGE_ROOT/protected-media/products/"; fi
if [ -d "$LIVE_ROOT/public/try-on" ]; then cp -a "$LIVE_ROOT/public/try-on/." "$STAGE_ROOT/protected-media/try-on/"; fi

node --check "$STAGE_ROOT/server.js"

rm -rf -- "$ROLLBACK_ROOT" "$FAILED_ROOT"
[ ! -d "$LIVE_ROOT" ] || mv "$LIVE_ROOT" "$ROLLBACK_ROOT"
mv "$STAGE_ROOT" "$LIVE_ROOT"
cd "$LIVE_ROOT"

pm2 delete "$PROCESS_NAME" >/dev/null 2>&1 || true
if ! PORT="$PORT" pm2 start npm --name "$PROCESS_NAME" --cwd "$LIVE_ROOT" -- start; then restore_previous; exit 1; fi
pm2 save >/dev/null

healthy=false
for _ in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:$PORT/health" | grep -q 'claude-download'; then healthy=true; break; fi
  sleep 1
done
[ "$healthy" = true ] || { restore_previous; echo "Health check failed" >&2; exit 1; }

curl -fsS "http://127.0.0.1:$PORT/" | grep -q 'יהלום'
curl --noproxy '*' -fsS --resolve 'www.libidiamonds.co.il:443:127.0.0.1' 'https://www.libidiamonds.co.il/' | grep -q 'יהלומים טבעיים ויהלומי מעבדה'

rm -rf -- "$ROLLBACK_ROOT" "$FAILED_ROOT"
echo "[LIBI] Exact downloaded Claude design is live."
