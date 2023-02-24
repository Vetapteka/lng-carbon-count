import React, { useState } from 'react';
import Input from './Input';
import classes from './Input.module.css';
import '../ui.css';

const InputRadio = ({
    label,
    choices,
    inputRadioRef,
    indexDefaultChecked,
    onChange,
    ...props
}) => {
    const [checkedValue, setCheckedValue] = useState(
        choices[indexDefaultChecked].value
    );

    const handlerChange = (event) => {
        const newValue = event.target.value;
        inputRadioRef.current.dataset.value = newValue;

        setCheckedValue(newValue);

        onChange?.call(event);
    };
    
    return (
        <div className='input_item__container'>
            <label>{label}</label>
            <div
                className={classes.input_radio__container}
                ref={inputRadioRef}
                onChange={handlerChange}
                data-value={choices[indexDefaultChecked].value}
            >
                {choices.map((choice, index) => (
                    <Input
                        defaultChecked={index === +indexDefaultChecked}
                        key={index}
                        type='radio'
                        name={props.name ? props.name : label}
                        labelClassName={
                            checkedValue === choice.value ? classes.checked : ''
                        }
                        {...choice}
                    />
                ))}
            </div>
        </div>
    );
};

export default InputRadio;
