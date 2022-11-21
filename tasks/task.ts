import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import simpleTokenAbi from "../artifacts/contracts/SimpleToken.sol/SimpleToken.json";
import simpleNftAbi from "../artifacts/contracts/SImpleNft.sol/SimpleNft.json";
import { SimpleToken, SimpleNft } from "../typechain-types/index";



task("faucet-simple-token", "send simple token")
  .setAction(async (arg, hre: HardhatRuntimeEnvironment) => {
    console.log(`[task] setRewardInfo start >> env=${process.env.ENV} / chainId=${80001} / rpcApiKey=${"c21b48b2c20840df8122dfcf374351c7"}`);

    const { ethers } = hre;
    const provider = new ethers.providers.InfuraProvider(80001, "c21b48b2c20840df8122dfcf374351c7");
    
    const wallet = new ethers.Wallet('68693f0f556d534295c90e825f2278eda17169e89fac9419ef970c301414cef8', provider);
    const contract = new ethers.Contract("0x293437cef4A501F85e13CD7fC24024F42177aEbD", simpleTokenAbi.abi, wallet) as SimpleToken;

    const tx = await contract.faucet();
    console.log('TX data >> ', tx);

    const receipt = await tx.wait();
    console.log('receipt >> ', receipt);
  });

  task("mint-simple-nft", "")
    .setAction(async (arg, hre: HardhatRuntimeEnvironment) => {
      console.log(`[task] setRewardInfo start >> env=${process.env.ENV} / chainId=${80001} / rpcApiKey=${"c21b48b2c20840df8122dfcf374351c7"}`);

      const { ethers } = hre;
      const provider = new ethers.providers.InfuraProvider(80001, "c21b48b2c20840df8122dfcf374351c7");


      const wallet = new ethers.Wallet('68693f0f556d534295c90e825f2278eda17169e89fac9419ef970c301414cef8', provider);
      const contract = new ethers.Contract("0xDfAF8c2c256CEEA97BC8bb71364d1bE62FC4f3f3",simpleNftAbi.abi, wallet) as SimpleNft;

      const tx = await contract.mint(wallet.address, "https://gateway.pinata.cloud/ipfs/QmXjE3xkg2kxjyoUBY5Bj27mk8o6KHvAEHgJ6pQen6Nwdx");
      console.log('TX data >> ', tx);

      const receipt = await tx.wait();
      console.log('receipt >> ', receipt);
    })