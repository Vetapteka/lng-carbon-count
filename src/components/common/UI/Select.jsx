import React, { useEffect, useState } from 'react';
import './ui.css';

const Select = ({ label, getOptionsData }) => {
    const [optionsData, setOptionsData] = useState([]);

    useEffect(() => {
        getOptionsData().then((data) => setOptionsData(data));
    }, []);

    return (
        <label>
            {label}
            <select>
                {optionsData.map((data) => (
                    <option key={data.name}>
                        {data.name}, {data.country}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
