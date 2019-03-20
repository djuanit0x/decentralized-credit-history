import React, {Component} from 'react';
import Loan from '../../utils/loan';

export default class componentName extends Component {
    static async getInitialProps(props) {
        const loan = Loan(props.query.address);
        console.log(await loan);

        return {loan}
    }
    render() {
        return (
            <div>
                <p>hehe</p>
            </div>
        );
    }
}
