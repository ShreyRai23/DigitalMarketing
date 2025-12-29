$servicePagesPath = "c:\Users\shrey\OneDrive\Documents\Digital Marketing\client\src\pages\services"

# List of files already updated (skip these)
$updatedFiles = @(
    "AndroidAppDevelopment.jsx",
    "IosAppDevelopment.jsx",
    "NativeAppDevelopment.jsx",
    "HybridAppDevelopment.jsx",
    "BusinessExplainerVideo.jsx",
    "LogoDesigning.jsx",
    "SocialMediaPostDesign.jsx",
    "SearchEngineOptimization.jsx",
    "CmsWebDevelopment.jsx",
    "CrmSoftwareDevelopment.jsx",
    "CustomWebDesigning.jsx"
)

# Get all jsx files
$allFiles = Get-ChildItem "$servicePagesPath\*.jsx" | Select-Object -ExpandProperty Name

# Files that still need updating
$filesToUpdate = $allFiles | Where-Object { $_ -notin $updatedFiles }

Write-Host "Files that still need updating ($($filesToUpdate.Count)):"
$filesToUpdate | ForEach-Object { Write-Host "  -$_" }
