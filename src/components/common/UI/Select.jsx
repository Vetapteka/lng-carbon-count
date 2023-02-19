import React from 'react';
import './ui.css';

const Select = ({ label, options, children, selectRef, ...props }) => {
    return (
        <div className='input_item__container'>
            <label htmlFor={label}>{label}</label>
            <select id={label} name={label} {...props} ref={selectRef}>
                {!children
                    ? options?.map((content, index) => (
                          <option key={index}>{content}</option>
                      ))
                    : children}
            </select>
        </div>
    );
};

export default Select;
