import React from 'react';
import classes from './Form.module.css';
import { getTemplate} from './formUtils';

const Form = ({ size, children, ...props }) => {
    const style = {
        gridTemplate: getTemplate(size),
    };

    return (
        <form style={style} className={classes.form} {...props}>
            {children}
        </form>
    );
};

export default Form;
