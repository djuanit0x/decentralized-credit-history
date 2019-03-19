import getWeb3 from './getWeb3.js';
import Loan from '../contracts/Loan.json';

export default address => {
    return new getWeb3().eth.Contract(JSON.parse(Loan.abi), address);
};
