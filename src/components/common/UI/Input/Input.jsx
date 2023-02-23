import React, { useEffect } from 'react';
import classes from './Input.module.css';
import '../ui.css';

const Input = ({ label, unit, inputRef, labelClassName, ...props }) => {
    return (
        <div className='input_item__container'>
            <label className={labelClassName} htmlFor={label}>
                {label}
            </label>
            <div className={classes.input_item}>
                <input
                    type='text'
                    id={label}
                    name={props.name ?? label}
                    ref={inputRef}
                    {...props}
                />
                {unit ? <span>{unit}</span> : ''}
            </div>
        </div>
    );
};

export default Input;
