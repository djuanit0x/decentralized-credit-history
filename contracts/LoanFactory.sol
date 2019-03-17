pragma solidity ^0.5.0;
import "./Loan.sol";
contract LoanFactory {
    address[] public deployedLoans;


    function createLoan() public {
        address _newLoan = address(new Loan(msg.sender));
        deployedLoans.push(_newLoan);
    }

    function getDeployedLoans() public view returns(address[] memory) {
        return deployedLoans;
    }
}
