require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "",
      port: ,  //blockhain port
      network_id: "" //blockchain network ID
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
