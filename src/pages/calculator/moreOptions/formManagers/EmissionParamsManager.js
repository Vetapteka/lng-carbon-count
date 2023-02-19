import { fetchEmissionParams } from '../../../../API/portsAPI';
import { InputItem } from '../../../../utils/formUtils/formItems/InputItem';
import { FormManager } from '../../../../utils/formUtils/FormManager';

const items = [
    new InputItem('Production', 't CO2-e/thousand m3'),
    new InputItem('Gas transport', 't CO2-e/thousand m3'),
    new InputItem('Liquefaction', 't CO2-e/t LNG'),
    new InputItem('Shipping', 't CO2-e/t LNG'),
    new InputItem('Regasification', 't CO2-e/t LNG'),
    new InputItem('End use', 't CO2-e/thousand m3'),
    new InputItem('Electricity emission factor', 't CO2-e/kWh'),
];

const fetchValues = async () => {
    let values = await fetchEmissionParams();
    return values.map((obj) => obj.value);
};

const defaultValues = [0, 0, 0, 0, 0, 0, 0];

export const EmissionParamsManager = new FormManager(
    items,
    defaultValues,
    fetchValues
);
