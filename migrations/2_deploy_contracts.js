var LoanFactory = artifacts.require('./LoanFactory.sol');

module.exports = function(deployer) {
    deployer.deploy(LoanFactory);
};
