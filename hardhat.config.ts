import "dotenv/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

import "hardhat-deploy";

import { HardhatUserConfig } from "hardhat/types";

import "./tasks/task.ts"



const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: parseInt(process.env.CHAIN_ID_MUMBAI as string),
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: parseInt(process.env.CHAIN_ID_POLYGON as string),
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      chainId: parseInt(process.env.CHAIN_ID_MUMBAI as string),
    }
  },
};

export default config;