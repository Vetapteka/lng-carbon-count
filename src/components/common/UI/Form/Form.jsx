import React from 'react';
import Input from '../Input';
import Select from '../Select';
import classes from './Form.module.css';

const Form = ({ fields, size, children, ...props }) => {
    const style = {
        gridTemplate: getTemplate(size),
    };

    return (
        <form style={style} className={classes.form} {...props}>
            {!children
                ? fields.map((field) => getUIComponent(field))
                : children}
        </form>
    );
};

const getTemplate = (size) => {
    return `repeat(${size.rowCount}, 1fr)/repeat(${size.columnCount}, 1fr)`;
};

export const getUIComponent = (props) => {
    switch (props.tag) {
        case 'select':
            return <Select {...props} key={props.label} />;
        case 'input':
            return <Input {...props} key={props.label} />;
    }
};

export default Form;
