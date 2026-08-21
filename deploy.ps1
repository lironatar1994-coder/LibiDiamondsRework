param(
    [string]$SshHost = "root@vee-app.co.il",
    [switch]$SkipVerify
)

$ErrorActionPreference = "Stop"
$RemoteStage = "/root/LibiDiamonds-live.next"
$ArchiveName = "libi-diamonds-release.tar.gz"
$ArchivePath = Join-Path $env:TEMP $ArchiveName

function Assert-LastExitCode([string]$Action) {
    if ($LASTEXITCODE -ne 0) { throw "$Action failed with exit code $LASTEXITCODE." }
}

$required = @("package.json", "package-lock.json", "next.config.ts", "src", "public\images\design", "deploy_linux.sh")
foreach ($path in $required) {
    if (-not (Test-Path -LiteralPath $path)) { throw "Missing required release path: $path" }
}

if (-not $SkipVerify) {
    Write-Host "Verifying the release locally..." -ForegroundColor Cyan
    npm run verify
    Assert-LastExitCode "Local verification"
}

if (Test-Path -LiteralPath $ArchivePath) { Remove-Item -LiteralPath $ArchivePath -Force }

try {
    Write-Host "Creating a source-only release archive..." -ForegroundColor Cyan
    # Product archives are deliberately excluded. deploy_linux.sh moves the verified
    # server copies into the clean release before activation.
    tar -czf $ArchivePath package.json package-lock.json next.config.ts tsconfig.json next-env.d.ts .env.example src public/images/design deploy_linux.sh
    Assert-LastExitCode "Archive creation"

    Write-Host "Preparing the guarded staging directory..." -ForegroundColor Cyan
    ssh $SshHost "set -e; test '/root/LibiDiamonds-live.next' = '$RemoteStage'; rm -rf -- '$RemoteStage'; mkdir -p -- '$RemoteStage'"
    Assert-LastExitCode "Remote stage preparation"

    scp $ArchivePath "${SshHost}:/tmp/$ArchiveName"
    Assert-LastExitCode "Archive upload"

    $remoteCommand = "set -e; trap 'rm -f -- /tmp/$ArchiveName' EXIT; test '$RemoteStage' = '/root/LibiDiamonds-live.next'; tar -xzf '/tmp/$ArchiveName' -C '$RemoteStage'; cd '$RemoteStage'; sed -i 's/`r$//' deploy_linux.sh; chmod +x deploy_linux.sh; bash deploy_linux.sh"
    Write-Host "Building and activating the release on the server..." -ForegroundColor Cyan
    ssh $SshHost $remoteCommand
    Assert-LastExitCode "Remote deployment"
}
finally {
    if (Test-Path -LiteralPath $ArchivePath) { Remove-Item -LiteralPath $ArchivePath -Force }
}

Write-Host "LIBI Diamonds deployed successfully: https://www.libidiamonds.co.il" -ForegroundColor Green
