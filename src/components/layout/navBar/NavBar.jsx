import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as consts from '../../../utils/consts';
import classes from './NavBar.module.css';
import authIcon from '../../../assets/authIcon.svg';
import downloadIcon from '../../../assets/downloadIcon.svg';
import Container from '../../common/Container/Container';
import Button from '../../common/UI/Button/Button';
import { buttonRoles } from '../../common/UI/Button/ButtonRoles';

const NavBar = () => {
    const [classActive, setClassActive] = useState('');

    const toggleClassActive = () => {
        setClassActive(classActive ? '' : ' ' + classes.active);
    };
    const closeBurger = () => {
        setClassActive('');
    };

    return (
        <header className={classes.header}>
            <div className={classes.header_btns}>
                <Container>
                    <div className={classes.header_btns__body}>
                        <Button role={buttonRoles.img}>
                            <img src={downloadIcon} />
                        </Button>
                        <Button role={buttonRoles.img}>
                            <img src={authIcon} />
                        </Button>
                    </div>
                </Container>
            </div>
            <div className={classes.header_menu + classActive}>
                <Container>
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
                </Container>
            </div>
        </header>
    );
};

export default NavBar;
