module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy, log} = deployments

    log("Deploying ccip contract")
    await deploy("CCIPLocalSimulator", {
        contract: "CCIPLocalSimulator",
        from: firstAccount,
        args: [],
        log: true
    })
    log("CCIP contract deployed successfully")
}
module.exports.tags = ["test", "all"]