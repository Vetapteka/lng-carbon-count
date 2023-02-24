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

export const fetchDistance = async (portFrom, portTo, route) => {
    // const url = `some_url?portFrom=${portFrom}&portTo=${portTo}&route=${route}`;
    const { data } = await $host.get('./data_example/distances.json');
    return Math.round(+data.value * Math.random() * 1000);
};

export const fetchEmission = async (engionType) => {
    // const url = `some_url?engionType=${engionType}`;
    const { data } = await $host.get('./data_example/emission.json');
    return Math.round(+data.value * Math.random());
};

/* запрос вернет ответ есть ли для этих портов nsr путь */
export const fetchIsNsrRoute = async (portFrom, portTo) => {
    return Math.random() > 0.5;
};
