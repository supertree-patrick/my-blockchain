import "dotenv/config";

import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = hre.deployments;
  console.log('PRIVATE ADDRESS ::: ', process.env.OWNER_PRIVATE_MUMBAI);

  const deployments = await deploy("SimpleNft", {
    from: process.env.OWNER_PRIVATE_MUMBAI!,
    log: true,
  });

}

export default deploy;
deploy.tags = ["simple-nft"];