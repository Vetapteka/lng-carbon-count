import { $host } from './index';

export const fetchPorts = async () => {
    const { data } = await $host.get('./data_example/ports.json');
    return data;
};
