import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Layout;
