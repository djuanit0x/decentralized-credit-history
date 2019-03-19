import getWeb3 from './getWeb3.js';
import Loan from '../contracts/Loan.json';

export default async address => {
    const web3 = await getWeb3();
    return new web3.eth.Contract(Loan.abi, address);
};
