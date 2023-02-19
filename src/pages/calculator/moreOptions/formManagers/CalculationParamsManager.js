import { fetchCalculationParams } from '../../../../API/portsAPI';
import { InputItem } from '../../../../utils/formUtils/formItems/InputItem';
import { FormManager } from '../../../../utils/formUtils/FormManager';

const items = [
    new InputItem('LNG density', 't/m3'),
    new InputItem('Natural gas density', 't/m3'),
    new InputItem('Electricity emission factors', 't CO2-e/kWh'),
    new InputItem('t LNG to thousand m3 of gas', 'thousand m3/t LNG'),
];

const fetchValues = async () => {
    let values = await fetchCalculationParams();
    return values.map((obj) => obj.value);
};

const defaultValues = [0, 0, 0, 0];

export const CalculationParamsManager = new FormManager(
    items,
    defaultValues,
    fetchValues,
);
