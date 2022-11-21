// hardhat 및 typechain을 위한 패키지 
yarn add --dev hardhat typescript ts-node typechain @typechain/hardhat @typechain/ethers-v5  
// 테스트를 위한 패키지 
yarn add --dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

hardhat.config.ts
```
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
};

export default config;
```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "resolveJsonModule": true
  },
  "include": ["./scripts", "./test"],
  "files": ["./hardhat.config.ts"]
}
```


install deploy pakage
yarn add --dev hardhat-deploy dotenv





### deploy contract
```
npx hardhat deploy --network mumbai --tags simple-nft --reset
```