import React, { useEffect, useState } from 'react';
import Form from './Form';
import { createUIComponent } from './formUtils';

const ControlledForm = ({ formManager, ...props }) => {
    const items = formManager.items;
    const [values, setValues] = useState(formManager.defaultValues);

    useEffect(() => {
        formManager.fetchValues().then((data) => setValues(data));
    }, []);

    const handleSubmit = (index, event) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };

    return (
        <Form {...props}>
            {items.map((item, index) =>
                createUIComponent({
                    item: item,
                    value: values[index],
                    onChange: handleSubmit.bind(this, index),
                })
            )}
        </Form>
    );
};

export default ControlledForm;
