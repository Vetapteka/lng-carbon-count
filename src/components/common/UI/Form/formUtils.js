import React from 'react';
import Input from '../Input/Input';
import { InputItem } from '../../../../utils/formUtils/formItems/InputItem';

export const getTemplate = (size) => {
    return `repeat(${size.rowCount}, 1fr)/repeat(${size.columnCount}, 1fr)`;
};

export const createUIComponent = ({ item, value, onChange }) => {
    if (item instanceof InputItem)
        return (
            <Input
                {...item}
                value={value}
                onChange={onChange}
                key={item.label}
            />
        );
};
