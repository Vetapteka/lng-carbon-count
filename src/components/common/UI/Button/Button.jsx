import React from 'react';
import classes from './Button.module.css';
import '../ui.css';

const Button = (props) => {
    return (
        <button {...props} className={classes.button + ' ' + props.role}>
            {props.children}
        </button>
    );
};

export default Button;
