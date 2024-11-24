module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy, log} = deployments
    
    log("Deploying NFTPoolLockAndRelease contract")
    const ccipSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorDeployment.address)
    const ccipConfig = await ccipSimulator.configuration()
    const sourceRouter = ccipConfig.sourceRouter_
    const linkTokenAddr = ccipConfig.linkToken_
    const nft = await deployments.get("MyToken")
    await deploy("NFTPoolLockAndRelease", {
            contract: "NFTPoolLockAndRelease",
            from: firstAccount,
            args: [sourceRouter,linkTokenAddr,nft.address],
            log: true
        }
    )
    log("NFTPoolLockAndRelease deployed successfully")
}

module.exports.tags = ["sourcechain","all"]