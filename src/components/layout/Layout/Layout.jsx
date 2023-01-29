import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../../common/Container/Container';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

import './Layout.css';

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
