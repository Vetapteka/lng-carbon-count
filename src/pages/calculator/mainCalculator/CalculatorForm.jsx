import React, {useState, useEffect, useRef} from 'react';
import {
    fetchDistance,
    fetchEmission,
    fetchIsNsrRoute,
    fetchPorts,
} from '../../../API/portsAPI';
import Form from '../../../components/common/UI/Form/Form';
import Input from '../../../components/common/UI/Input/Input';
import InputRadio from '../../../components/common/UI/Input/InputRadio';
import Select from '../../../components/common/UI/Select';

const routeAllChoices = [
    {label: 'Suez', value: 'suez'},
    {label: 'NSR', value: 'nsr'},
];

const routeDefaultChoices = [{label: 'Suez', value: 'suez'}];

const engionChoices = [
    {label: 'Diesel', value: 'diesel'},
    {label: 'DFDE', value: 'dfde'},
];

const CalculatorForm = (props) => {
    const [isAllRouteChoices, setIsAllRouteCho] = useState(false);
    const [portsToOptions, setPortsToOptions] = useState([]);
    const [portsFromOptions, setPortsFromOptions] = useState([]);

    const portTo = useRef(null);
    const portFrom = useRef(null);
    const distance = useRef(null);
    const route = useRef(null);
    const engionType = useRef(null);
    const emission = useRef(null);

    const getCurrentPorts = () => {
        const portToValue = portTo.current.value;
        const portFromValue = portFrom.current.value;
        return [portToValue, portFromValue];
    };

    const updateDistance = () => {
        const [port1, port2] = getCurrentPorts();
        const routeValue = route.current.dataset.value;

        fetchDistance(port1, port2, routeValue).then(
            (data) => (distance.current.value = data)
        );
    };

    const updateEmission = () => {
        const engineTypeValue = engionType.current.dataset.value;

        fetchEmission(engineTypeValue).then(
            (data) => (emission.current.value = data)
        );
    };

    const updateRouteChoices = ([port1, port2]) => {
        fetchIsNsrRoute(port1, port2).then((data) => setIsAllRouteCho(data));
    };

    const handlerSelectPort = () => {
        updateDistance();
        updateRouteChoices(getCurrentPorts());
    };

    useEffect(() => {
        fetchPorts().then((data) => {
            const portsToOptions = data.map(
                (obj) => `${obj.country}, ${obj.name}`
            );

            const portsFromOptions = ['Russia, Ust-Luga '];

            setPortsToOptions(portsToOptions);
            setPortsFromOptions(portsFromOptions);

            updateDistance();
            updateEmission();
        });
    },[]);

    const handlerSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.table(Object.fromEntries(data.entries()));
    };

    return (
        <Form {...props} onSubmit={handlerSubmit}>
            <Select
                selectRef={portFrom}
                label='From'
                options={portsFromOptions}
                onChange={handlerSelectPort}
            />
            <Select
                selectRef={portTo}
                label='To'
                options={portsToOptions}
                onChange={handlerSelectPort}
            />
            <InputRadio
                inputRadioRef={route}
                label='Route'
                choices={
                    isAllRouteChoices ? routeAllChoices : routeDefaultChoices
                }
                indexDefaultChecked='0'
                onChange={updateDistance}
            />
            <Input
                inputRef={distance}
                label='Distance'
                unit='Nmi'
                defaultValue='0'
            />
            <Input label='Volume' unit='m3 LNG'/>
            <InputRadio
                inputRadioRef={engionType}
                label='Engion type'
                choices={engionChoices}
                indexDefaultChecked='0'
                onChange={updateEmission}
            />
            <Input
                inputRef={emission}
                label='Emission intensity'
                unit='t CO2-e/Nmi'
            />
        </Form>
    );
};

export default CalculatorForm;
