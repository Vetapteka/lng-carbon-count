import React from 'react';
import classes from './Form.module.css';
import { getTemplate, getUIComponent } from './formUtils';

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

export default Form;
