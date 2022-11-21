import { ethers } from "hardhat";

describe.only("SimpleNft Test", function() {
  it("mint SimpleNft", async function() {
    this.timeout(200000000);

    const [ mintWallet ] = await ethers.getSigners();

    const _simpleNftContract = await ethers.getContractFactory("SimpleNft");
    const simpleNftContract = await _simpleNftContract.deploy();

    console.log('before callWallet ::: ', await mintWallet.getBalance());
    await simpleNftContract.mint(mintWallet.address, "https://gateway.pinata.cloud/ipfs/QmXjE3xkg2kxjyoUBY5Bj27mk8o6KHvAEHgJ6pQen6Nwdx");
    console.log('before callWallet ::: ', await mintWallet.getBalance());
  });
});