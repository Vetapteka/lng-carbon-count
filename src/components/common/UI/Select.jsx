import React, { useEffect, useState } from 'react';
import './ui.css';

const Select = ({ label, getOptionsData }) => {
    const [optionsData, setOptionsData] = useState([]);

    useEffect(() => {
        getOptionsData().then((data) => setOptionsData(data));
    }, []);

    return (
        <div className='input_item'>
            <select id={label}>
                {optionsData.map((data) => (
                    <option key={data.name}>
                        {data.name}, {data.country}
                    </option>
                ))}
            </select>
            <label for={label}>{label}</label>
        </div>
    );
};

export default Select;
