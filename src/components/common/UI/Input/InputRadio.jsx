import React from 'react';
import Input from './Input';
import classes from './Input.module.css';
import '../ui.css';

const InputRadio = ({ label, chouses }) => {
    return (
        <div className={classes.input_radio__body}>
            <label>{label}</label>
            <div className={classes.input_radio__container}>
                {chouses.map((chouse, index) => (
                    <Input key={index} type='radio' name={label} {...chouse} />
                ))}
            </div>
        </div>
    );
};

export default InputRadio;
