import React from 'react';
import './ui.css';

const Select = ({ label, options, ...props }) => {
    return (
        <div className='input_item__container'>
            <label htmlFor={label}>{label}</label>
            <select id={label} {...props}>
                {options.map((content, index) => (
                    <option key={index}>{content}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
