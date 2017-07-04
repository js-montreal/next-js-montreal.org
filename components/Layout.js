import Header from './Header.js';
import Head from 'next/head';
import { Container } from 'bloomer';

const Layout = ({ children }) => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css"/>
        </Head>
        <Container>
            <Header />
            { children }
        </Container>
    </div>
);

export default Layout;
