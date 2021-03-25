// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./Token.sol";

contract dBank {
    // Assign Token contract to variable
    Token private token;

    // Pass as constructor argument deployed Token contract
    constructor(Token _token) public {
        // Assign token deployed contract to variable
        token = _token;
    }
}