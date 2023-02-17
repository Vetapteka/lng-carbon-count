import React from 'react';
import MoreOptionsLayout from './layout/MoreOptionsLayout';
import Button from '../../../components/common/UI/Button/Button';
import { buttonRoles } from '../../../components/common/UI/Button/ButtonRoles';
import Form from '../../../components/common/UI/Form/Form';
import { Size } from '../../../components/common/UI/utils';
import { Link } from 'react-router-dom';
import { CALCULATOR_ROUTE } from '../../../utils/consts';
import { GeneralParamsManager } from './formManagers/GeneralParamsManager';
import { EmissionParamsManager } from './formManagers/EmissionParamsManager';
import { CalculationParamsManager } from './formManagers/CalculationParamsManager';

const MoreOptions = () => {
    const generalForm = (
        <Form
            id='form'
            size={new Size(1, 4)}
            formManager={GeneralParamsManager}
        />
    );
    const emissionForm = (
        <Form
            id='form'
            size={new Size(1, 7)}
            formManager={EmissionParamsManager}
        />
    );
    const parametersForm = (
        <Form
            id='form'
            size={new Size(1, 4)}
            formManager={CalculationParamsManager}
        />
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
