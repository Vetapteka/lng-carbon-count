import React from 'react';
import classes from './Input.module.css';
import '../ui.css';

const Input = ({ label, type, unit, ...props }) => {
    return (
        <div className='input_item__container'>
            <label for={label}>{label}</label>
            <div className={classes.input_item}>
                <input id={label} type={type} {...props} />
                {unit ? <span>{unit}</span> : ''}
            </div>
        </div>
    );
};

export default Input;
