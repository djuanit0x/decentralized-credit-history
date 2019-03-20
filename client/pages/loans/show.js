import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import Loan from '../../utils/loan';

export default class componentName extends Component {
    static async getInitialProps(props) {
        const loan = await Loan(props.query.address);
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

        return {rePayments, loanTitle, lenderAddress, borrowerAddress};
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <p>hehe</p>
            </div>
        );
    }
}
