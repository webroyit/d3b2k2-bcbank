// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 'is' inherit the contract from openzeppelin ERC20.sol
contract Token is ERC20 {
    // Add minter variable
    address public minter;

    // Add minter changed event
    // Logs everytime a minter changed
    // 'event' can be used for notification
    event MinterChanged(address indexed from, address to);

    // 'payable' to allow sending funds
    // 'ERC20()' to call the constructor from openzeppelin ERC20.sol
    constructor() public payable ERC20("WRI Bank Currency", "WRIBC") {
        // Asign initial minter
        // 'msg.sender' is a global variable inside of solidity
        minter = msg.sender;
    }

    // Add pass minter role function
    function passMinterRole(address dBank) public returns (bool) {
        // Check if msg.sender have minter role
        require(msg.sender == minter, "Error, msg.sender is not the minter");
        minter = dBank;
        
        emit MinterChanged(msg.sender, dBank);
        return true;
    }
    // Create tokens
    function mint(address account, uint256 amount) public {
        // Check if msg.sender have minter role
        require(msg.sender == minter, "Error, msg.sender is not the minter");

        // Call the _mint from openzeppelin ERC20.sol
        _mint(account, amount);
    }
}