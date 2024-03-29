require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const RINKEBY_RPC_URL = ''
// const PRIVATE_kEY = ''

module.exports = {
  solidity: "0.8.4",
  paths:{
    sources: "./contracts",
    tests: "./test",
  }, 
  networks: {
    evmos:{
      url: 'https://eth.bd.evmos.dev:8545',
      accounts: ['e9e8c5efc5278d03040a39da17d636f242306690ea673bf7b45eaf9e0c2ba917']
    }

  }
};
