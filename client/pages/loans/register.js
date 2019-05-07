import React, {Component} from "react";
import {Form, Input, Message, Button} from "semantic-ui-react";
import Layout from "../../components/Layout";
import LoanFactory from "../../contracts/LoanFactory.json";
import Loan from "../../contracts/Loan.json";
import getWeb3 from "../../utils/getWeb3";
import CalculateRepayments from "../../utils/calculateRepayments";
import {Router} from "../../routes";

export default class RegisterLoanForm extends Component {
    state = {
        loading: false,
        loanTitle: "",
        borrowerAddress: "",
        startDate: "",
        tenor: "",
        interestRatePerYear: "",
        balanceRequested: "",
        origination: "",
        gracePeriod: ""
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({loading: true}, async () => {
            try {
                this.handleLoadingChange(true);
                const web3 = await getWeb3();
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = LoanFactory.networks[networkId];

                const loanFactoryInstance = new web3.eth.Contract(
                    LoanFactory.abi,
                    deployedNetwork.address
                );
                await loanFactoryInstance.methods.createLoan().send({from: accounts[0]});
                let {
                    loanTitle,
                    borrowerAddress,
                    startDate,
                    tenor,
                    interestRatePerYear,
                    balanceRequested,
                    origination,
                    gracePeriod
                } = this.state;
                let calculationSchedules = CalculateRepayments(
                    startDate,
                    tenor,
                    interestRatePerYear,
                    balanceRequested,
                    origination,
                    gracePeriod
                );

                const deployedLoanContract = await loanFactoryInstance.methods.getDeployedLoans().call();
                const deployedLoanContractLength = await loanFactoryInstance.methods
                    .getDeployedLoansLength()
                    .call();

                const loanInstance = new web3.eth.Contract(
                    Loan.abi,
                    deployedLoanContract[deployedLoanContractLength - 1]
                );
                await loanInstance.methods
                    .addAllRepaymentSchedules(calculationSchedules, borrowerAddress, loanTitle)
                    .send({from: accounts[0]});
                this.handleLoadingChange(false);
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(`Failed to load web3, accounts, or contract. Check console for details.`);
                console.error(error);
                this.handleLoadingChange(false);
            }
        });
    };

    handleLoadingChange = async val => {
        await this.setState({
            loading: val
        });

        if (!val) {
            await Router.pushRoute(`/`);
        }
    };

    render() {
        return (
            <Layout>
                <Form onSubmit={this.onSubmit}>
                    <h2 className='ui large header'>Register a Loan</h2>
                    <Form.Field>
                        <label>Loan Title</label>
                        <Input
                            value={this.state.loanTitle}
                            onChange={event => this.setState({loanTitle: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Borrower Address</label>
                        <Input
                            value={this.state.borrowerAddress}
                            onChange={event => this.setState({borrowerAddress: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Starting Date</label>
                        <Input
                            label='YYYY-MM-DD'
                            labelPosition='right'
                            value={this.state.startDate}
                            onChange={event => this.setState({startDate: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Tenor</label>
                        <Input
                            label='months'
                            labelPosition='right'
                            value={this.state.tenor}
                            onChange={event => this.setState({tenor: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Balance Requested</label>
                        <Input
                            label='rupiah'
                            labelPosition='right'
                            value={this.state.balanceRequested}
                            onChange={event => this.setState({balanceRequested: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Interest Rate Per Year</label>
                        <Input
                            label='%'
                            labelPosition='right'
                            value={this.state.interestRatePerYear}
                            onChange={event => this.setState({interestRatePerYear: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Origination</label>
                        <Input
                            label='%'
                            labelPosition='right'
                            value={this.state.origination}
                            onChange={event => this.setState({origination: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Grace Period</label>
                        <Input
                            label='months'
                            labelPosition='right'
                            value={this.state.gracePeriod}
                            onChange={event => this.setState({gracePeriod: event.target.value})}
                        />
                    </Form.Field>
                    <Button loading={this.state.loading} type='submit' primary>
                        Create
                    </Button>
                </Form>
            </Layout>
        );
    }
}
