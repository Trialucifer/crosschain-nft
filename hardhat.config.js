require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  namedAccounts: {
    //如果是本地的，就调用hardhat准备的地址，如果真是测试网，就看真是测试网配置的
    firstAccount: {
      default: 0
    }
  }
};
