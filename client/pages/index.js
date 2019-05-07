import React, {Component} from "react";
import LoanFactory from "../contracts/LoanFactory.json";
import Loan from "../utils/loan";
import getWeb3 from "../utils/getWeb3";
import Layout from "../components/Layout";
import {Card, Grid, Button} from "semantic-ui-react";
import {Link} from "../routes";

class LoanIndex extends Component {
    state = {web3: null, accounts: null, contract: null, loans: []};

    static async getInitialProps() {
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
            loans: deployedLoanContract ? deployedLoanContract : []
        };
    }
    componentDidMount = async () => {
        try {
            const contractArr = await Promise.all(
                this.props.loans.map(async address => {
                    const loan = await Loan(address);
                    let lenderAddress = await loan.methods.lender().call();
                    let borrowerAddress = await loan.methods.borrower().call();
                    let loanTitle = await loan.methods.loanTitle().call();
                    let contractAddress = await loan._address;
                    return {lenderAddress, borrowerAddress, contractAddress, loanTitle};
                })
            );
            await this.setState({loans: contractArr});
        } catch (error) {
            throw error;
        }
    };

    renderLoans = () => {
        return this.state.loans.map((loan, i) => {
            return (
                <Grid.Column key={i}>
                    <Card fluid style={{marginTop: "28px"}}>
                        <Card.Content>
                            <Card.Header>{loan.loanTitle}</Card.Header>
                            <Card.Meta>{loan.contractAddress}</Card.Meta>
                            <Card.Description>Lender: {loan.lenderAddress}</Card.Description>
                            <Card.Description>Borrower: {loan.borrowerAddress}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Link route={`/loans/${loan.contractAddress}`}>
                                <Button basic color='blue' fluid>
                                    View
                                </Button>
                            </Link>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            );
        });
    };

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Row columns={2}>{this.renderLoans()} </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default LoanIndex;
