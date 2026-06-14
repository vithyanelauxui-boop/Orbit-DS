# Orbit DS Claude Skill Installer (Windows PowerShell)
# Run: .\install.ps1

$skillsDir = "$env:USERPROFILE\.claude\skills"
$skillFile = "$skillsDir\orbit-ds.md"
$sourceFile = "$PSScriptRoot\..\.claude\skills\orbit-ds.md"

if (-not (Test-Path $skillsDir)) {
    New-Item -ItemType Directory -Force $skillsDir | Out-Null
}

Copy-Item -Force $sourceFile $skillFile
Write-Host "Orbit DS skill installed to $skillFile"
Write-Host "Restart Claude Code, then use /orbit-ds in any session."
