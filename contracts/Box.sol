//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//import "hardhat/console.sol";

contract Box {
    uint256 private value;

    /// Emitted when the storage value changes
    event ValueChanged(uint256 newValue);

    /// Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    /// Reads the last stored value
    function retrieve() public view returns(uint256){
        return value;
    }
    
}
