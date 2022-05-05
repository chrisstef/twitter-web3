require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/tc6cWRDpTNFCynGqsjIsySpHc7IPDwhL",
      accounts: [
        privateKey
      ],
    },
  },
};
