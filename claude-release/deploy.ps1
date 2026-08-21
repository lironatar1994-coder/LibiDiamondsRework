param([string]$SshHost = "root@vee-app.co.il")

$ErrorActionPreference = "Stop"
$archive = Join-Path $env:TEMP "libi-claude-design-release.tar.gz"

function Assert-Code([string]$label) {
    if ($LASTEXITCODE -ne 0) { throw "$label failed with exit code $LASTEXITCODE" }
}

node --check server.js
Assert-Code "Server verification"

if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive -Force }
try {
    tar -czf $archive package.json server.js deploy_linux.sh site
    Assert-Code "Archive creation"
    ssh $SshHost "set -e; rm -rf -- /root/LibiDiamonds-live.next; mkdir -p -- /root/LibiDiamonds-live.next"
    Assert-Code "Stage preparation"
    scp $archive "${SshHost}:/tmp/libi-claude-design-release.tar.gz"
    Assert-Code "Upload"
    ssh $SshHost "set -e; tar -xzf /tmp/libi-claude-design-release.tar.gz -C /root/LibiDiamonds-live.next; rm -f -- /tmp/libi-claude-design-release.tar.gz; cd /root/LibiDiamonds-live.next; sed -i 's/`r$//' deploy_linux.sh; chmod +x deploy_linux.sh; bash deploy_linux.sh"
    Assert-Code "Production deployment"
}
finally {
    if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive -Force }
}
