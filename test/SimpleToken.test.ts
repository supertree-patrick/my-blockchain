import { ethers } from "hardhat";

describe('SimpleToken', function() {
  it('Fauct Token', async function() {
    this.timeout(200000000);

    const [ callWallet ] = await ethers.getSigners();

    const _simpleTokenContract = await ethers.getContractFactory('SimpleToken');
    const simpleTokenContract = await _simpleTokenContract.connect(callWallet).deploy("SimpleToken", "Simple");

    console.log('before callWallet ::: ', await callWallet.getBalance());
    simpleTokenContract.connect(callWallet).faucet();
    console.log('before callWallet ::: ', await callWallet.getBalance());
  })
})