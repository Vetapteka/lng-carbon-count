import React from 'react';
import Select from '../Select';
import Input from '../Input/Input';
import InputRadio from '../Input/InputRadio';

export const getTemplate = (size) => {
    return `repeat(${size.rowCount}, 1fr)/repeat(${size.columnCount}, 1fr)`;
};

export const getUIComponent = (props) => {
    switch (props.tag) {
        case 'select':
            return <Select {...props} key={props.label} />;
        case 'input':
            return <Input {...props} key={props.label} />;
        case 'inputRadio':
            return <InputRadio {...props} key={props.label} />;
    }
};
