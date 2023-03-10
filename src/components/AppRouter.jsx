import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as routes from '../utils/consts';

import ContactUs from '../pages/ContactUs';
import Calculator from '../pages/calculator/mainCalculator/Calculator';
import Metodic from '../pages/Metodic';
import HelpCenter from '../pages/HelpCenter';
import Layout from './layout/Layout/Layout';
import MoreOptions from '../pages/calculator/moreOptions/MoreOptions';

const router = createBrowserRouter([
    {
        path: routes.CALCULATOR_ROUTE,
        element: <Layout />,
        children: [
            {
                path: routes.CALCULATOR_ROUTE,
                element: <Calculator />,
            },
            {
                path: routes.METODIC_ROUTE,
                element: <Metodic />,
            },
            {
                path: routes.HELP_CNTER_ROUTE,
                element: <HelpCenter />,
            },
            {
                path: routes.CONTACT_US_ROUTE,
                element: <ContactUs />,
            },
            {
                path: routes.MORE_OPTIONS_ROUTE,
                element: <MoreOptions />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
