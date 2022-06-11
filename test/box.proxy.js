const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

let Box
let box

describe("Box (proxy) ", function () {
  beforeEach(async function() {
    Box = await ethers.getContractFactory("Box")
    box = await upgrades.deployProxy(Box, [42], {initializer: "store"})
  })

  it("Retrieve returns a value previously initialised", async function () {
    // Test if the return value is the same one
    // Comparing them using strings
    expect((await box.retrieve()).to.string()).to.equal("42");

  });
});
