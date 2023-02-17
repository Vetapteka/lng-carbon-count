import React from 'react';
import Select from '../Select';
import Input from '../Input/Input';
import InputRadio from '../Input/InputRadio';
import { InputItem } from '../../../../utils/formUtils/formItems/InputItem';
import { SelectItem } from '../../../../utils/formUtils/formItems/SelectItem';
import { InputRadioItem } from '../../../../utils/formUtils/formItems/InputRadioItem';

export const getTemplate = (size) => {
    return `repeat(${size.rowCount}, 1fr)/repeat(${size.columnCount}, 1fr)`;
};

export const getUIComponent = (item) => {
    if (item instanceof InputItem)
        return <Input {...item} key={item.label} />;
    if (item instanceof SelectItem)
        return <Select {...item} key={item.label} />;
    if (item instanceof InputRadioItem)
        return <InputRadio {...item} key={item.label} />;
};
