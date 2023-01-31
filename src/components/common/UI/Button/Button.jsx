import React from 'react';
import classes from '../ui.module.css';

const Button = (props) => {
    return (
        <button className={classes.button + ' ' +  props.role}>
            {props.children}
        </button>
    );
};

export default Button;
