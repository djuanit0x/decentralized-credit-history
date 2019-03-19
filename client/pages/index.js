import React, {Component} from 'react';
import LoanFactory from '../contracts/LoanFactory.json';
import Loan from '../../client/utils/loan';
import getWeb3 from '../utils/getWeb3';
import Layout from '../components/Layout';

class LoanIndex extends Component {
    state = {storageValue: 0, web3: null, accounts: null, contract: null, loans: []};

    static async getInitialProps(props) {
        // const loan = Loan(props.query.address);
        let deployedLoanContract;
        try {
            const web3 = await getWeb3();
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = LoanFactory.networks[networkId];
            const loanFactoryInstance = new web3.eth.Contract(LoanFactory.abi, deployedNetwork.address);
            deployedLoanContract = await loanFactoryInstance.methods.getDeployedLoans().call();
        } catch (error) {
            throw error;
        }

        return {
            loans: deployedLoanContract
        };
    }

    renderLoans = async () => {
        console.log(this.props.loans);
        const promiseArray = await Promise.all(
            this.props.loans.map(address => {
                // const loan = Loan(address).then(data => {
                //     console.log(data);
                // });
                const loan = Loan(address);
                console.log(loan);
                debugger;
                return loan;
            })
        );
        console.log(promiseArray);
        this.state.loans = [...promiseArray];
        console.log(promiseArray);
        return {promiseArray};
    };

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = LoanFactory.networks[networkId];

            const instance = new web3.eth.Contract(LoanFactory.abi, deployedNetwork.address);

            // await instance.methods.createLoan().send({from: accounts[0]});
            let deployedLoans = await instance.methods.getDeployedLoans().call();

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({web3, accounts, contract: instance});
            // this.setState({web3, accounts, contract: instance}, this.runExample);
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(error);
        }
    };

    runExample = async () => {
        const {accounts, contract} = this.state;

        // Stores a given value, 5 by default
        console.log(accounts[0]);
        console.log(contract);

        await contract.methods.createLoan().send({from: accounts[0]});

        // Get the value from the contract to prove it worked.
        // const response = await contract.methods.get().call();

        // Update state with the result.
        // this.setState({ storageValue: response });
    };

    render() {
        // if (!this.state.web3) {
        //     return <div>Loading Web3, accounts, and contract...</div>;
        // }
        this.renderLoans();
        console.log(this.state.loans);
        return (
            <Layout>
                <h1>Good to Go!</h1>
                <p>Your Truffle Box is installed and ready.</p>
                <h2>Smart Contract Example</h2>
                <p>
                    If your contracts compiled and migrated successfully, below will show a stored value
                    of 5 (by default).
                </p>
                <p>
                    Try changing the value stored on <strong>line 40</strong> of App.js.
                </p>
                <div>The stored value is: {this.state.storageValue}</div>
                {/* {this.renderLoans()} */}
            </Layout>
        );
    }
}

export default LoanIndex;
