import React from 'react';
import { Link } from 'react-router-dom';
import {
    CALCULATOR_ROUTE,
    CONTACT_US_ROUTE,
    HELP_CNTER_ROUTE,
    METODIC_ROUTE,
} from '../../../utils/consts';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_btns}>
                <div className='container'>
                    <div className={classes.header_btns__body}>
                        <button className={classes.auth}>auth</button>
                        <button className={classes.download}>download</button>
                    </div>
                </div>
            </div>
            <div className={classes.header_menu}>
                <div className='container'>
                    <div className={classes.header_menu__body}>
                        <Link
                            className={classes.header_menu__logo}
                            to={CALCULATOR_ROUTE}
                        >
                            <h1>lng carbon count</h1>
                        </Link>
                        <div
                            className={classes.header_menu__burger}
                            onClick={(event) => {
                                console.log(event);
                                // event.target.toggleClass(classes.active);
                            }}
                        >
                            <span></span>
                        </div>
                        <nav className={classes.header_menu__list}>
                            <ul>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={METODIC_ROUTE}
                                    >
                                        About LNG CC
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={HELP_CNTER_ROUTE}
                                    >
                                        Help center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={CONTACT_US_ROUTE}
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
