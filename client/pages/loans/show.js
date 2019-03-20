import React, {Component} from 'react';
import {Table, Card, Grid, CardContent} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import RePaymentRow from '../../components/RepaymentsRow';
import Loan from '../../utils/loan';

export default class componentName extends Component {
    static async getInitialProps(props) {
        const loanContractAddress = props.query.address;
        const loan = await Loan(loanContractAddress);
        const rePaymentsCount = await loan.methods.getRepaymentsCount().call();
        const loanTitle = await loan.methods.loanTitle().call();
        let lenderAddress = await loan.methods.lender().call();
        let borrowerAddress = await loan.methods.borrower().call();
        const rePayments = await Promise.all(
            Array(parseInt(rePaymentsCount))
                .fill()
                .map((element, index) => {
                    return loan.methods.rePayments(index).call();
                })
        );

        return {rePayments, loanTitle, lenderAddress, borrowerAddress, loanContractAddress};
    }

    renderRows = () => {
        return this.props.rePayments.map((rePayment, index) => {
            return <RePaymentRow key={index} month={index} {...rePayment} />;
        });
    };
    render() {
        const {Header, Row, HeaderCell, Body} = Table;
        return (
            <Layout>
                <Card fluid>
                    <Card.Content textAlign="center">
                        <Card.Header>{this.props.loanTitle}</Card.Header>
                        <Card.Meta>{this.props.loanContractAddress}</Card.Meta>
                        <Card.Description>Lender: {this.props.lenderAddress}</Card.Description>
                        <Card.Description>Borrower: {this.props.borrowerAddress}</Card.Description>
                    </Card.Content>
                </Card>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>Month</HeaderCell>
                            <HeaderCell>Date</HeaderCell>
                            <HeaderCell>Balance</HeaderCell>
                            <HeaderCell>Payment</HeaderCell>
                            <HeaderCell>Interest</HeaderCell>
                            <HeaderCell>Principal</HeaderCell>
                            <HeaderCell>Paid</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRows()}</Body>
                </Table>
            </Layout>
        );
    }
}
