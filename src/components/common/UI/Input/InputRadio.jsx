import React, { useState } from 'react';
import Input from './Input';
import classes from './Input.module.css';
import '../ui.css';

const InputRadio = ({
    label,
    chouses,
    inputRadioRef,
    indexDefaultChecked,
    onChange,
    ...props
}) => {
    const [checkedValue, setCheckedValue] = useState(
        chouses[indexDefaultChecked].value
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
                data-value={chouses[indexDefaultChecked].value}
            >
                {chouses.map((chouse, index) => (
                    <Input
                        defaultChecked={index == +indexDefaultChecked}
                        key={index}
                        type='radio'
                        name={props.name ? props.name : label}
                        labelClassName={
                            checkedValue == chouse.value ? classes.checked : ''
                        }
                        {...chouse}
                    />
                ))}
            </div>
        </div>
    );
};

export default InputRadio;
