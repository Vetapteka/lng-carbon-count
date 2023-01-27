import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className={classes.footer__body}>
                    <div>{new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
