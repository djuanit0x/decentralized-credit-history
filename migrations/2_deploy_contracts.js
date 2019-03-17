// var SimpleStorage = artifacts.require('./SimpleStorage.sol');
var LoanFactory = artifacts.require('./LoanFactory.sol');

module.exports = function(deployer) {
    // deployer.deploy(SimpleStorage);
    deployer.deploy(LoanFactory);
};
