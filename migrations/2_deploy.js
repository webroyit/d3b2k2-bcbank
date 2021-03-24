const Token = artifacts.require("Token");

// Put the contract on the blockchain
module.exports = async function(deployer) {
	// deploy Token
    await deployer.deploy(Token);
};