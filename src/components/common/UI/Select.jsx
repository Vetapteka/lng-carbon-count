import React, { useEffect, useState } from 'react';
import classes from './ui.module.css';

const Select = ({ label, getOptionsData }) => {
    const [optionsData, setOptionsData] = useState([]);

    useEffect(() => {
        getOptionsData().then((data) => setOptionsData(data));
    }, []);

    return (
        <label className={classes.label}>
            {label} <br />
            <select className={classes.select}>
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
