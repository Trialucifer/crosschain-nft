const {ethers, deployments, getNamedAccounts, network} = require("hardhat")
const {assert, expect} = require("chai")

    let firstAccount
    let nft
    let wnf
    let poolLnU
    let poolMnB
    let chainSelector
    beforeEach(async function() {
        firstAccount = (await getNamedAccounts()).firstAccount
        await deployments.fixture(["all"])
        nft = await ethers.getContract("MyToken", firstAccount)
        wnf = await ethers.getContract("WrappedMyToken", firstAccount)
        poolLnU = await ethers.getContract("NFTPoolLockAndRelease", firstAccount)
        poolMnB = await ethers.getContract("NFTPoolBurnAndMit", firstAccount)
        ccipSimulator = await ethers.getContract("CCIPLocalSimulator", firstAccount)
        chainSelector = (await ccipSimulator.configuration()).chainSelector_
    })


describe("source chain -> dest chain", async function() {
    //source chain -> dest chain
    //test if user can mint a nft from nft contract successfully
    it("test if user can mint a nft from nft contract successfully", 
        async function() {
            await nft.safeMint(firstAccount)
            //查询tokenId为0的owner是谁
            const owner = await nft.ownerOf(0)
            expect(owner).to.equals(firstAccount)
        }
    )

    it("test if user can lock the nft in the pool and send cccip message on source chain", 
        async function() {
            // await ccipSimulator.requestLinkFromFaucet(poolLnU, ethers.parseEther("0.01"))
            //0: 当前tokenId
            // await nft.approve(poolLnU.target, 0)
            // await poolLnU.lockAndSendNFT(0, firstAccount, chainSelector, poolMnB.target)

            const owner = await nft.ownerOf(0)
            expect(owner).to.equals(firstAccount)
        }
    )

    // it("test if user can get a wrapped nft in dest chain", async function() {
    //     const owner = await wnf.ownerOf(0)
    //     expect(owner).to.equals(firstAccount)
    // })
    //

    //dest chain -> source chain
    //test if user can burn the wnft and send ccip message on dest chain

    //test if user have the nfg unlocked on source chain
})

describe("test if user can lock the nft in the pool and send cccip message on source chain", async function() {

})