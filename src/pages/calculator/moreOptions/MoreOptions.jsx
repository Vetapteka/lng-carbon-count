import React from 'react';
import MoreOptionsLayout from './MoreOptionsLayout';
import Button from '../../../components/common/UI/Button/Button';
import { buttonRoles } from '../../../components/common/UI/Button/ButtonRoles';
import Form from '../../../components/common/UI/Form/Form';
import { Size } from '../../../components/common/UI/utils';
import {
    generalParams,
    calculationParams,
    emissionIntensityParams,
} from '../../../utils/lng-variables';
import { Link } from 'react-router-dom';
import { CALCULATOR_ROUTE } from '../../../utils/consts';

const MoreOptions = () => {
    const generalForm = (
        <Form id='form' size={new Size(1, 4)} fields={generalParams} />
    );
    const emissionForm = (
        <Form
            id='form'
            size={new Size(1, 7)}
            fields={emissionIntensityParams}
        />
    );
    const parametersForm = (
        <Form id='form' size={new Size(1, 4)} fields={calculationParams} />
    );
    const buttonSubmit = (
        <Button role={buttonRoles.main} type='submit' form='form'>
            save
        </Button>
    );
    const buttonTurnBack = (
        <Button role={buttonRoles.base}>
            <Link to={CALCULATOR_ROUTE}>turn back</Link>
        </Button>
    );
    return (
        <MoreOptionsLayout
            generalForm={generalForm}
            emissionForm={emissionForm}
            parametersForm={parametersForm}
            buttonSubmit={buttonSubmit}
            buttonTurnBack={buttonTurnBack}
        />
    );
};

export default MoreOptions;
