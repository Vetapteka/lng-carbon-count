import React from 'react';
import '../ui.css';

const Input = ({ label, type, ...props }) => {
    return (
        <label>
            {label}
            <input type={type} {...props} />
        </label>
    );
};

export default Input;
