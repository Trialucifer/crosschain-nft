module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy, log} = deployments

    log("Deploying wnft contract")
    await deploy("WrappedMyToken", {
        contract: "WrappedMyToken",
        from: firstAccount,
        args: ["WrappedMyToken", "WMT"],
        log: true
    })
    log("wnft contract deployed successfully")
}
module.exports.tags = ["destchain", "all"]