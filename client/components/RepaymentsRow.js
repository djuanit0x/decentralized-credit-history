import React from 'react';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table/Table';
import {Button, Icon} from 'semantic-ui-react';
import getWeb3 from '../utils/getWeb3';
import Loan from '../utils/loan';

const {Row, Cell} = Table;

export default ({
    loanContractAddress,
    month,
    balance,
    date,
    interest,
    monthToIsPaid,
    payment,
    principal,
    loading,
    handleLoadingChange,
    handleMonthToIsPaidChange
}) => {
    return (
        <Row
            positive={+principal !== 0 && monthToIsPaid && +month !== 0}
            negative={+principal !== 0 && !monthToIsPaid && +month !== 0}
        >
            <Cell>{month}</Cell>
            <Cell>{date}</Cell>
            <Cell>{balance}</Cell>
            <Cell>{payment}</Cell>
            <Cell>{interest}</Cell>
            <Cell>{principal}</Cell>
            <Cell>
                {+principal === 0 ? (
                    ''
                ) : monthToIsPaid ? (
                    <Icon name='checkmark' />
                ) : (
                    <Icon name='close' />
                )}
                {+principal === 0 ? 'None' : monthToIsPaid ? 'Paid' : 'Unpaid'}
            </Cell>
            <Cell>
                {+principal === 0 ? (
                    ''
                ) : monthToIsPaid && +month !== 0 ? (
                    <Button
                        fluid
                        basic
                        color='red'
                        loading={loading}
                        onClick={async () => {
                            try {
                                await handleLoadingChange(true, month);
                                const loan = await Loan(loanContractAddress);
                                const web3 = await getWeb3();
                                const accounts = await web3.eth.getAccounts();

                                await loan.methods.markRePaymentAsUnPaid(+month).send({
                                    from: accounts[0]
                                });
                                await handleMonthToIsPaidChange();
                                await handleLoadingChange(false, month);
                            } catch (err) {
                                await handleLoadingChange(false, month);
                                throw err;
                            }
                        }}
                    >
                        Mark as Unpaid
                    </Button>
                ) : !monthToIsPaid && +month !== 0 ? (
                    <Button
                        fluid
                        basic
                        color='green'
                        loading={loading}
                        onClick={async () => {
                            try {
                                await handleLoadingChange(true, month);
                                const loan = await Loan(loanContractAddress);
                                const web3 = await getWeb3();
                                const accounts = await web3.eth.getAccounts();

                                await loan.methods.markRePaymentAsPaid(+month).send({
                                    from: accounts[0]
                                });
                                await handleMonthToIsPaidChange();
                                await handleLoadingChange(false, month);
                            } catch (err) {
                                await handleLoadingChange(false, month);
                                throw err;
                            }
                        }}
                    >
                        Mark as Paid
                    </Button>
                ) : (
                    ''
                )}
            </Cell>
        </Row>
    );
};
