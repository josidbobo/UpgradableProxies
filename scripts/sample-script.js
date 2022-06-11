// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Box = await hre.ethers.getContractFactory("Box");
  console.log("Deploying proxy, box implementation, and Proxy admin...")

  const boxProxy = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
  console.log("BoxProxy deployed to:", boxProxy.address)

  // const box = await Greeter.deploy(Box);

  // await box.deployed();

  // console.log("Box deployed to:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
