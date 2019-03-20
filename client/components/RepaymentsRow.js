import React from 'react';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table/Table';
import {Button} from 'semantic-ui-react';
import getWeb3 from '../utils/getWeb3';
import Loan from '../utils/loan';

const {Row, Cell} = Table;

export default ({
    id,
    description,
    value,
    recipient,
    approvalCount,
    approversCount,
    address,
    index,
    complete
}) => {
    return (
        <Row disabled={complete} positive={approvalCount > approversCount / 2 && !complete}>
            <Cell>{id}</Cell>
            <Cell>{description}</Cell>
            <Cell>{web3.utils.fromWei(value, 'ether')}</Cell>
            <Cell>{recipient}</Cell>
            <Cell>
                {approvalCount}/{approversCount}
            </Cell>
            <Cell>
                {complete ? null : (
                    <Button
                        color='green'
                        basic
                        onClick={async () => {
                            const campaign = Campaign(address);
                            console.log(campaign);
                            const accounts = await web3.eth.getAccounts();
                            console.log(accounts);
                            await campaign.methods.approveRequest(id).send({
                                from: accounts[0]
                            });
                        }}
                    >
                        Approve
                    </Button>
                )}
            </Cell>
            <Cell>
                {complete ? null : (
                    <Button
                        color='teal'
                        basic
                        onClick={async () => {
                            const campaign = Campaign(address);

                            const accounts = await web3.eth.getAccounts();
                            await campaign.methods.finalizeRequest(id).send({
                                from: accounts[0]
                            });
                        }}
                    >
                        Finalize
                    </Button>
                )}
            </Cell>
        </Row>
    );
};
