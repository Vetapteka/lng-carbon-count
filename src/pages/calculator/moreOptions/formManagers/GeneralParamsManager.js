import { fetchGeneralParams } from '../../../../API/portsAPI';
import { InputItem } from '../../../../utils/formUtils/formItems/InputItem';
import { FormManager } from '../../../../utils/formUtils/FormManager';

const items = [
    new InputItem('LNG production capacity', 't LNG per year'),
    new InputItem('Natural gas for liquefaction', 'thousand m3 per year'),
    new InputItem('Total energy consumption', 'kWh'),
    new InputItem('Gas pipeline length', 'km'),
];

const valueSetter = async () => {
    let values = await fetchGeneralParams();
    return values.map((obj) => obj.value);
};

export const GeneralParamsManager = new FormManager(items, valueSetter);
