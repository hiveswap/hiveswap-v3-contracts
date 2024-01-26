import { verifyContract } from "@pancakeswap/common/verify";
import { sleep } from "@pancakeswap/common/sleep";
import { configs } from "@pancakeswap/common/config";
import { network } from 'hardhat'

async function main() {
  const networkName = network.name;
  const config = configs[networkName as keyof typeof configs];

  if (!config) {
    throw new Error(`No config found for network ${networkName}`);
  }
  const deployedContractsMasterchefV3 = await import(`@pancakeswap/masterchef-v3/deployments/${networkName}.json`);
  const deployedContractsV3Periphery = await import(`@pancakeswap/v3-periphery/deployments/${networkName}.json`);

  // Verify masterChefV3
  console.log("Verify masterChefV3");
  await verifyContract(deployedContractsMasterchefV3.MasterChefV3, [
    config.cake,
    deployedContractsV3Periphery.NonfungiblePositionManager,
    config.WNATIVE,
  ]);
  await sleep(10000);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
