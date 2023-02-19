import React from 'react';
import classes from './Input.module.css';
import '../ui.css';

const Input = ({ label, unit, inputRef, ...props }) => {
    return (
        <div className='input_item__container'>
            <label htmlFor={label}>{label}</label>
            <div className={classes.input_item}>
                <input type='text' id={label} {...props} ref={inputRef}/>
                {unit ? <span>{unit}</span> : ''}
            </div>
        </div>
    );
};

export default Input;
