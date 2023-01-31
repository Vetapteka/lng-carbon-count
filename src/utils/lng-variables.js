import { fetchPorts } from '../API/portsAPI';

export const mainParams = [
    {
        label: 'To',
        tag: 'select',
        getOptionsData: fetchPorts,
    },
    {
        label: 'From',
        tag: 'select',
        getOptionsData: fetchPorts,
    },
    {
        label: 'Route',
        tag: 'input',
        type: 'radio',
        chouse: [
            { label: 'Suez', value: 'suez' },
            { label: 'NSR', value: 'nsr' },
        ],
    },
    { label: 'Distance', unit: 'Nmi', tag: 'input', type: 'text' },
    { label: 'Volume', unit: 'm3 LNG', tag: 'input', type: 'text' },

    {
        label: 'Engion type',
        tag: 'input',
        type: 'radio',
        chouse: [
            { label: 'Diesel', value: 'diesel' },
            { label: 'DFDE', value: 'dfde' },
        ],
    },
];

export const generalParams = [
    {
        label: 'LNG production capacity',
        unit: 't LNG per year',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'Natural gas for liquefaction',
        unit: 'thousand m3 per year',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'Total energy consumption',
        unit: 'kWh',
        tag: 'input',
        type: 'text',
    },
    { label: 'Gas pipeline length', unit: 'km', tag: 'input', type: 'text' },
];

export const emissionIntensityParams = [
    {
        label: 'Production',
        unit: 't CO2-e/thousand m3',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'Gas transport',
        unit: 't CO2-e/thousand m3',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'Liquefaction',
        unit: 't CO2-e/t LNG',
        tag: 'input',
        type: 'text',
    },
    { label: 'Shipping', unit: 't CO2-e/t LNG', tag: 'input', type: 'text' },
    {
        label: 'Regasification',
        unit: 't CO2-e/t LNG',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'End use',
        unit: 't CO2-e/thousand m3',
        tag: 'input',
        type: 'text',
    },
    {
        label: 'Electricity emission factor',
        unit: 't CO2-e/kWh',
        tag: 'input',
        type: 'text',
    },
];

export const calculationParams = [
    { label: 'LNG density', unit: 't/m3', tag: 'input', type: 'text' },
    { label: 'Natural gas density', unit: 't/m3', tag: 'input', type: 'text' },
    {
        label: 'Electricity emission factors',
        unit: 't CO2-e/kWh',
        tag: 'input',
        type: 'text',
    },
    {
        label: 't LNG to thousand m3 of gas',
        unit: 'thousand m3/t LNG',
        tag: 'input',
        type: 'text',
    },
];
