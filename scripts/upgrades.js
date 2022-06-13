//const hre = require("hardhat");

const { upgrades } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
  let box = await upgrades.upgradeProxy("0x4f4BebE3B719cB6AB278Ec8754d36b6225c4c718", BoxV2)
  console.log("Your upgraded proxy is at:", box.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
