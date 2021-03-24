module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    version: ">=0.6.0 <0.8.0",
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}