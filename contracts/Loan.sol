pragma solidity ^0.5.0;

contract Loan {
    address public lender;
    address public borrower;
    struct RePayment {
        string date;
        string balance;
        string payment;
        string interest;
        string principal;
        bool monthToIsPaid;
    }

    RePayment[] public rePayments;

    modifier onlyLender() {
        require(msg.sender == lender);
        _;
    }

    modifier onlyBorrower() {
        require(msg.sender == borrower);
        _;
    }

    modifier minimumAndMaximumTenor(bytes32[] memory _bytes32Arr) {
        require(_bytes32Arr.length >= (6 * 5) && _bytes32Arr.length <= (20 * 5));
        _;
    }

    constructor(address _lender) public {
        lender = _lender;

    }

    function setBorrower(address _newBorrower) public onlyLender {
        borrower = _newBorrower;
    }

    function addAllRepaymentSchedules(bytes32[] memory _bytes32Arr, address _newBorrower) public onlyLender minimumAndMaximumTenor(_bytes32Arr) {
        borrower = _newBorrower;
        for (uint i = 0; i < _bytes32Arr.length - 5; i+=5) {
            string memory date = bytes32ToString(_bytes32Arr[i]);
            string memory balance = bytes32ToString(_bytes32Arr[i + 1]);
            string memory payment = bytes32ToString(_bytes32Arr[i + 2]);
            string memory interest = bytes32ToString(_bytes32Arr[i + 3]);
            string memory principal = bytes32ToString(_bytes32Arr[i + 4]);
            rePayments.push(RePayment(date, balance, payment, interest, principal, false)) - 1;
        }
        // borrowerToRePayments[borrower] = rePayments;
    }

    function checkRepaymentStatus(uint _month) public view returns (bool) {
        // return borrowerToRePayments[borrower][_month].monthToIsPaid;
        return rePayments[_month].monthToIsPaid;
    }

    function markRePaymentAsPaid(uint _month) onlyLender public  {
        // borrowerToRePayments[borrower][_month].monthToIsPaid = true;
        rePayments[_month].monthToIsPaid = true;
    }

    function bytes32ToString(bytes32 _data) pure public returns (string memory) {
        // create new bytes with a length of 32
        // needs to be bytes type rather than bytes32 in order to be writeable
        bytes memory _bytesContainer = new bytes(32);
        // uint to keep track of actual character length of string
        // bytes32 is always 32 characters long the string may be shorter
        uint256 _charCount = 0;
        // loop through every element in bytes32
        for (uint256 _bytesCounter = 0; _bytesCounter < 32; _bytesCounter++) {
            /*
            TLDR: takes a single character from bytes based on counter
            convert bytes32 data to uint in order to increase the number enough to
            shift bytes further left while pushing out leftmost bytes
            then convert uint256 data back to bytes32
            then convert to bytes1 where everything but the leftmost hex value (byte)
            is cutoff leaving only the leftmost byte
            */
            bytes1 _char = bytes1(bytes32(uint256(_data) * 2 ** (8 * _bytesCounter)));
            // if the character is not empty
            if (_char != 0) {
              // add to bytes representing string
              _bytesContainer[_charCount] = _char;
              // increment count so we know length later
              _charCount++;
            }
        }

        // create dynamically sized bytes array to use for trimming
        bytes memory _bytesContainerTrimmed = new bytes(_charCount);

        // loop through for character length of string
        for (uint256 _charCounter = 0; _charCounter < _charCount; _charCounter++) {
            // add each character to trimmed bytes container, leaving out extra
            _bytesContainerTrimmed[_charCounter] = _bytesContainer[_charCounter];
         }

        // return correct length string with no padding
        return string(_bytesContainerTrimmed);
    }
}
