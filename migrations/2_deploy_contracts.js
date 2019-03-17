// var SimpleStorage = artifacts.require('./SimpleStorage.sol');
var Loan = artifacts.require('./Loan.sol');

module.exports = function(deployer) {
    // deployer.deploy(SimpleStorage);
    deployer.deploy(Loan);
};
