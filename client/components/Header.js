import React from 'react';
import {Link} from '../routes';
import {Menu} from 'semantic-ui-react';
// import '../semantic/dist/semantic.min.css';

export default () => {
    return (
        <Menu style={{marginTop: '10px'}}>
            <Link route='/'>
                <a className='item'>DC</a>
            </Link>
            <Menu.Menu position='right'>
                <Link route='/'>
                    <a className='item'>Loans</a>
                </Link>
                <Link route='/loans/register'>
                    <a className='item'>+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
