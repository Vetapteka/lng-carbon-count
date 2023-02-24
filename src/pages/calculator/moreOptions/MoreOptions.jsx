import React, { useRef } from 'react';
import MoreOptionsLayout from './layout/MoreOptionsLayout';
import Button from '../../../components/common/UI/Button/Button';
import { buttonRoles } from '../../../components/common/UI/Button/ButtonRoles';
import ControlledForm from '../../../components/common/UI/Form/ControlledForm';
import { Size } from '../../../components/common/UI/utils';
import { Link } from 'react-router-dom';
import { CALCULATOR_ROUTE } from '../../../utils/consts';
import { GeneralParamsManager } from './formManagers/GeneralParamsManager';
import { EmissionParamsManager } from './formManagers/EmissionParamsManager';
import { CalculationParamsManager } from './formManagers/CalculationParamsManager';

const MoreOptions = () => {
    const emissionFormRef = useRef(null);
    const generalFormRef = useRef(null);
    const parametersFormRef = useRef(null);

    const handlerClickButton = () => {
        emissionFormRef.current.requestSubmit();
        generalFormRef.current.requestSubmit();
        parametersFormRef.current.requestSubmit();
    };

    const handlerSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        console.table(Object.fromEntries(data.entries()));
    };

    const generalForm = (
        <ControlledForm
            formRef={generalFormRef}
            size={new Size(1, 4)}
            formManager={GeneralParamsManager}
            onSubmit={handlerSubmit}
        />
    );
    const emissionForm = (
        <ControlledForm
            formRef={emissionFormRef}
            size={new Size(1, 7)}
            formManager={EmissionParamsManager}
            onSubmit={handlerSubmit}
        />
    );
    const parametersForm = (
        <ControlledForm
            formRef={parametersFormRef}
            size={new Size(1, 4)}
            formManager={CalculationParamsManager}
            onSubmit={handlerSubmit}
        />
    );
    const buttonSubmit = (
        <Button role={buttonRoles.main} onClick={handlerClickButton}>
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
