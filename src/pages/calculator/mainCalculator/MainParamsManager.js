import { fetchPorts } from '../../../API/portsAPI';
import { InputItem } from '../../../utils/formUtils/formItems/InputItem';
import { InputRadioItem } from '../../../utils/formUtils/formItems/InputRadioItem';
import { SelectItem } from '../../../utils/formUtils/formItems/SelectItem';
import { FormManager } from '../../../utils/formUtils/FormManager';

const items = [
    new SelectItem('From'),
    new SelectItem('To'),
    new InputRadioItem('Route', [
        { label: 'NSR', value: 'nsr' },
        { label: 'Suez', value: 'suez' },
    ]),

    new InputItem('Distance', 'Nmi'),
    new InputItem('Volume', 'm3 LNG'),
    new InputRadioItem('Engion type', [
        { label: 'Diesel', value: 'diesel' },
        { label: 'DFDE', value: 'dfde' },
    ]),
    new InputItem('Emission intensity', 't CO2-e/Nmi'),
];

const valuesSetter = async () => {
    let portsObjects = await fetchPorts();
    const ports = portsObjects.map((obj) => `${obj.country}, ${obj.name}`);
    return [ports, ports];
};

export const MainParamsManager = new FormManager(items, valuesSetter);
