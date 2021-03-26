// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./Token.sol";

contract dBank {
    // Assign Token contract to variable
    Token private token;

    // Add mappings
    // Can be used for database
    mapping(address => uint) public etherBalanceOf;
    mapping(address => uint) public depositStart;
    mapping(address => bool) public isDeposited;

    //add events
    event Deposit(address indexed user, uint etherAmount, uint timeStart);

    // Pass as constructor argument deployed Token contract
    constructor(Token _token) public {
        // Assign token deployed contract to variable
        token = _token;
    }

    function deposit() payable public {
        // Check if msg.sender didn't already deposited funds
        require(isDeposited[msg.sender] == false, "Error, deposit already active");
        // Check if msg.value is >= than 0.01 ETH
        require(msg.value >= 1e16, "Error, deposit must be >= 0.01 ETH");

        // Increase msg.sender ether deposit balance
        etherBalanceOf[msg.sender] = etherBalanceOf[msg.sender] + msg.value;
        // Start msg.sender holding time
        depositStart[msg.sender] = depositStart[msg.sender] + block.timestamp;

        // Set msg.sender deposit status to true
        // Activate deposit status
        isDeposited[msg.sender] = true;

        // Emit Deposit event
        emit Deposit(msg.sender, msg.value, block.timestamp);
    }
}