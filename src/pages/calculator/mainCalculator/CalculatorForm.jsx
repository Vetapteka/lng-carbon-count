import React, { useState, useEffect, useRef } from 'react';
import { fetchDistance, fetchPorts } from '../../../API/portsAPI';
import Form from '../../../components/common/UI/Form/Form';
import Input from '../../../components/common/UI/Input/Input';
import InputRadio from '../../../components/common/UI/Input/InputRadio';
import Select from '../../../components/common/UI/Select';

const routeChouses = [
    { label: 'NSR', value: 'nsr' },
    { label: 'Suez', value: 'suez' },
];

const engionChouses = [
    { label: 'Diesel', value: 'diesel' },
    { label: 'DFDE', value: 'dfde' },
];

const CalculatorForm = (props) => {
    const [portsToOptions, setPortsToOptions] = useState([]);
    const [portsFromOptions, setPortsFromOptions] = useState([]);

    const portTo = useRef(null);
    const portFrom = useRef(null);
    const distance = useRef(null);
    const route = useRef(null);

    const updateDistance = () => {
        const portToValue = portTo.current.value;
        const portFromValue = portFrom.current.value;
        const routeValue = route.current.dataset.value;

        fetchDistance(portFromValue, portToValue, routeValue).then(
            (data) => (distance.current.value = data)
        );
    };

    useEffect(() => {
        fetchPorts().then((data) => {
            const portsToOptions = data.map(
                (obj) => `${obj.country}, ${obj.name}`
            );

            const portsFromOptios = ['Russia, Ust-Luga '];

            setPortsToOptions(portsToOptions);
            setPortsFromOptions(portsFromOptios);

            updateDistance();
        });
    }, []);

    const handlePortChange = (event) => {
        updateDistance();
    };

    const handleRouteChange = (event) => {
        updateDistance();
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form {...props} onSubmit={handlerSubmit}>
            <Select
                selectRef={portFrom}
                label='From'
                options={portsFromOptions}
                onChange={handlePortChange}
            />
            <Select
                selectRef={portTo}
                label='To'
                options={portsToOptions}
                onChange={handlePortChange}
            />
            <InputRadio
                inputRadioRef={route}
                label='Route'
                chouses={routeChouses}
                indexDefaultChecked='1'
                onChange={handleRouteChange}
            />
            <Input
                inputRef={distance}
                label='Distance'
                unit='Nmi'
                defaultValue='0'
            />
            <Input label='Volume' unit='m3 LNG' />
            <InputRadio
                label='Engion type'
                chouses={engionChouses}
                indexDefaultChecked='0'
            />
            <Input label='Emission intensity' unit='t CO2-e/Nmi' />
        </Form>
    );
};

export default CalculatorForm;
