import React from 'react';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table/Table';
import {Button} from 'semantic-ui-react';
import getWeb3 from '../utils/getWeb3';
import Loan from '../utils/loan';

const {Row, Cell} = Table;

export default ({month, balance, date, interest, monthToIsPaid, payment, principal}) => {
    return (
        <Row>
            <Cell>{month}</Cell>
            <Cell>{date}</Cell>
            <Cell>{balance}</Cell>
            <Cell>{payment}</Cell>
            <Cell>{interest}</Cell>
            <Cell>{principal}</Cell>
            <Cell>{monthToIsPaid ? 'true' : 'false'}</Cell>
        </Row>
    );
};
