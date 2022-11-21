import "dotenv/config";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";


const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments;
  console.log('PRIVATE ::: ', process.env.OWNER_PRIVATE_GOERLI);
  const deployment = await deploy("SimpleToken", {
    from: process.env.OWNER_PRIVATE_GOERLI!,
    args: [
      "SimpleToken",
      "Simple"
    ],
    log: true,
  });
}

export default deploy;
deploy.tags = ['simple-token'];