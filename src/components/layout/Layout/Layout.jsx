import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../navBar/NavBar';

import './Layout.css';

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className='container'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
