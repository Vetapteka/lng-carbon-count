import React, { useEffect, useState } from 'react';
import classes from './Form.module.css';
import { getTemplate, getUIComponent } from './formUtils';

const Form = ({ formManager, size, children, ...props }) => {
    const [items, setItems] = useState(formManager.items);

    useEffect(() => {
        formManager.fillItems().then((data) => {
            setItems([...data]);
        });
    }, []);

    const style = {
        gridTemplate: getTemplate(size),
    };

    return (
        <form style={style} className={classes.form} {...props}>
            {!children ? items.map((item) => getUIComponent(item)) : children}
        </form>
    );
};

export default Form;
