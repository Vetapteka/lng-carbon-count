import React, { useEffect, useState } from 'react';
import './ui.css';

const Select = ({ label, getOptionsData }) => {
    const [optionsData, setOptionsData] = useState([]);

    useEffect(() => {
        getOptionsData().then((data) => setOptionsData(data));
    }, []);

    return (
        <div className='input_item__container'>
            <label for={label}>{label}</label>
            <select id={label}>
                {optionsData.map((data) => (
                    <option key={data.name}>
                        {data.name}, {data.country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
