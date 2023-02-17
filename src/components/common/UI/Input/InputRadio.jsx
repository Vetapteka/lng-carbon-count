import React from 'react';
import Input from './Input';
import classes from './Input.module.css';
import '../ui.css';

const InputRadio = ({ label, chouses}) => {
    return (
        <div className='input_item__container'>
            <label>{label}</label>
            <div className={classes.input_radio__container}>
                {chouses.map((chouse, index) => (
                    <Input checked key={index} type='radio' name={label} {...chouse} onChange={e => {}} />
                ))}
            </div>
        </div>
    );
};

export default InputRadio;
