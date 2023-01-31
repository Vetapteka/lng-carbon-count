import React from 'react';
import classes from './ui.module.css';

const Select = (props) => {
    return (
        <label className={classes.label}>
            {props.label} <br />
            <select className={classes.select}></select>
        </label>
    );
};

export default Select;
