import React from 'react';
import classes from './ui.module.css';

const Input = (props) => {
    return (
        <label className={classes.label}>
            {props.label} <br />
            <input className={classes.input} type={props.type} />
        </label>
    );
};

export default Input;
