require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/tc6cWRDpTNFCynGqsjIsySpHc7IPDwhL",
      accounts: [
        "76017e2630870bc8c4be056e5288b1493367757ed4d58690ab034770623f4292",
      ],
    },
  },
};
