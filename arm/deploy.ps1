[CmdletBinding(SupportsShouldProcess, ConfirmImpact = 'High')]
param (
  [Parameter()]
  [string]$ResourceGroupName = 'MCSS-Functions',
  [Parameter()]
  [string]$TemplateFilePath = '.\arm\cloud-function.json',
  [Parameter()]
  [string]$DeploymentName = 'mcss-function-deployment',
  [switch]$Validate,
  [switch]$Simulate,
  [switch]$Deploy,
  [switch]$Delete
)

$paramFile = '.' + $TemplateFilePath.split('.')[1] + '.parameters.json'

if ($Validate.IsPresent) {
  az deployment group validate --resource-group $ResourceGroupName --template-file $TemplateFilePath --parameters $paramFile --no-prompt
}
elseif ($Simulate.IsPresent) {
  az deployment group what-if --resource-group $ResourceGroupName --name $DeploymentName --template-file $TemplateFilePath --parameters $paramFile
}
elseif ($Deploy.IsPresent -and $PSCmdlet.ShouldProcess($ResourceGroupName, "DEPLOY")) {
  Write-Output "Deploying $TemplateFilePath to $ResourceGroupName"
  az deployment group create --resource-group $ResourceGroupName --template-file $TemplateFilePath --parameters $paramFile --name $DeploymentName
}
elseif ($Delete.IsPresent -and $PSCmdlet.ShouldProcess($ResourceGroupName, "DELETE")) {
  Write-Output "Deleting deployment $DeploymentName from RG $ResourceGroupName"
  az deployment group delete --resource-group $ResourceGroupName --name $DeploymentName
}
