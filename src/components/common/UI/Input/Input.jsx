import React from 'react';
import '../ui.css';

const Input = ({ label, type, ...props }) => {
    return (
        <div className='input_item'>
            <input id={label} type={type} {...props} />
            <label for={label}>{label}</label>
        </div>
    );
};

export default Input;
