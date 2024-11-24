const { ethers } = require("hardhat");

module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy, log} = deployments
    
    log("Deploying NFTPoolBurnAndMit contract")
    //constructor(address _router, address _link, address nftAddress) CCIPReceiver(_router) {
    const wnft = await deployments.get("WrappedMyToken")
    const ccipSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const ccipSimulator = await ethers.getContractAt("CCIPLocalSimulator", ccipSimulatorDeployment.address)
    const ccipConfig = await ccipSimulator.configuration()
    const destRouter = ccipConfig.destinationRouter_
    const linkTokenAddr = ccipConfig.linkToken_
    await deploy("NFTPoolBurnAndMit", {
            contract: "NFTPoolBurnAndMit",
            from: firstAccount,
            args: [destRouter,linkTokenAddr,wnft.address],
            log: true
        }
    )
    log("NFTPoolBurnAndMit deployed successfully")
}

module.exports.tags = ["destchain","all"]