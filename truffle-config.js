const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    contracts_build_directory: path.join(__dirname, "client/contracts"),
    networks: {
        development_docker: {
            host: "ganache",
            port: 8545,
            network_id: "*" // To Match any network id
        },
        development_local: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // To Match any network id
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC_METAMASK_2,
                    `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY_END_POINT_2}`
                );
            },
            network_id: "4",
            from: process.env.ACCOUNT_1_ADDRESS_METAMASK_V2
        }
    }
};
