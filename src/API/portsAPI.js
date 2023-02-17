import { $host } from './index';

export const fetchPorts = async () => {
    const { data } = await $host.get('./data_example/ports.json');
    return data;
};

export const fetchCalculationParams = async () => {
    const { data } = await $host.get('./data_example/calculation_params.json');
    return data;
};

export const fetchEmissionParams = async () => {
    const { data } = await $host.get('./data_example/emission_params.json');
    return data;
};

export const fetchGeneralParams = async () => {
    const { data } = await $host.get('./data_example/general_params.json');
    return data;
};
