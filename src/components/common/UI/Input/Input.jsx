import React from 'react';
import classes from './Input.module.css'
import '../ui.css';

const Input = ({ label, type, ...props }) => {
    return (
        <div className={classes.input_item}>
            <input id={label} type={type} {...props} />
            <label for={label}>{label}</label>
        </div>
    );
};

export default Input;
