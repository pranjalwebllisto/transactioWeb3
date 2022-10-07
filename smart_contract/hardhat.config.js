//https://eth-mainnet.g.alchemy.com/v2/7vUrzQh3fS9bVRn4oXxK9pH5IpA0FS7R

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TFNX5yZaVwsnEgpqUmsQMm_XhkwDZ5wR',
      accounts: ['bc318be59627b7d2caecd495259b93b7d9bc125849e7c8de6d9e989e2c7cca42']
    }
  }
}