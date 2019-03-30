import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header.js';
import Footer from './Footer';

export default props => {
    return (
        <Container>
            <Head>
                <link
                    rel='stylesheet'
                    href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
                />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </Container>
    );
};

/* <add key='Access-Control-Allow-Origin' value='https://creditdapp.herokuapp.com/' />
                <add key='Access-Control-Allow-Methods' value='POST, GET, OPTIONS, DELETE' />
                <add key='Access-Control-Allow-Credentials' value='true' />
                <add
                    key='Access-Control-Allow-Headers'
                    value='Accept,Origin,Content-Type,X-LS-CORS-Template,X-LS-Auth-Token,X-LS-Auth-User-Token,Content-Type,X-LS-Sync-Result,X-LS-Sequence,token'
                /> */
