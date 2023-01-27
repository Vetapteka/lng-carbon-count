import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as consts from '../../../utils/consts';
import classes from './NavBar.module.css';
import authIcon from '../../../assets/authIcon.svg';
import downloadIcon from '../../../assets/downloadIcon.svg';

const NavBar = () => {
    const [classActive, setClassActive] = useState('');

    const toggleClassActive = () => {
        setClassActive(classActive ? '' : classes.active);
    };
    const closeBurger = () => {
        setClassActive('');
    };

    return (
        <header className={classes.header}>
            <div className={classes.header_btns}>
                <div className='container'>
                    <div className={classes.header_btns__body}>
                        <button>
                            <img src={downloadIcon} />
                        </button>
                        <button>
                            <img src={authIcon} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.header_menu + classActive}>
                <div className='container'>
                    <div className={classes.header_menu__body}>
                        <Link
                            className={classes.header_menu__logo}
                            to={consts.CALCULATOR_ROUTE}
                        >
                            <h1>lng carbon count</h1>
                        </Link>
                        <div
                            className={
                                classes.header_menu__burger + classActive
                            }
                            onClick={toggleClassActive}
                        >
                            <span></span>
                        </div>
                        <nav
                            className={classes.header_menu__list + classActive}
                        >
                            <ul onClick={closeBurger}>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={consts.METODIC_ROUTE}
                                    >
                                        About LNG CC
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={consts.HELP_CNTER_ROUTE}
                                    >
                                        Help center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={classes.header_menu__link}
                                        to={consts.CONTACT_US_ROUTE}
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
