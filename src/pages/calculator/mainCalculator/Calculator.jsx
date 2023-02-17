import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/UI/Button/Button';
import { buttonRoles } from '../../../components/common/UI/Button/ButtonRoles';
import Form from '../../../components/common/UI/Form/Form';
import { Size } from '../../../components/common/UI/utils';
import { MORE_OPTIONS_ROUTE } from '../../../utils/consts';
import CalculatorLayout from './layout/CalculatorLayout';
import { MainParamsManager } from './MainParamsManager';

const Calculator = () => {
    const mainForm = (
        <Form
            id='mainForm'
            size={new Size(4, 2)}
            formManager={MainParamsManager}
        />
    );
    const mainFormButton = (
        <Button role={buttonRoles.main} type='submit' form='mainForm'>
            Calculate
        </Button>
    );
    const moreOptionButton = (
        <Button role={buttonRoles.extra}>
            <Link to={MORE_OPTIONS_ROUTE}>more options</Link>
        </Button>
    );

    return (
        <CalculatorLayout
            mainForm={mainForm}
            mainFormButton={mainFormButton}
            moreOptionButton={moreOptionButton}
        />
    );
};

export default Calculator;
