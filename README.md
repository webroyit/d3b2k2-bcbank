# BC Bank
Earn interest when you deposit ETH.  The template is from Dapp University youtube channel.

## What it does?
- You can deposit ETH
- You can withdraw ETH and earn interest

## Packages
- `@openzeppelin/contracts` a library for secure smart contract development
- `chai` for testing
- `web3` to interact with ethereum node

## Notes
- `msg.sender` is a global variable inside of solidity
- `msg.value` is the ether amount
- `truffle compile` compiled the smart contract to code that the ethereum virtual machine (EVM) can read
- 'abi' (abstract binary interface) is a json representation of the smart contract
- WEI is like a penny for ethereum
- Gas fee occur when you create transactions on the ethereum network
- We have gas fee because it is used to prevent spam on the network and it help maintain the security of the blockchain
- Event in solidity is used to keep track of certain activities happen on the blockchain
- `block.timestamp` are measure in seconds that is based on epic time