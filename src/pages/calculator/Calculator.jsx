import React from 'react';
import Button from '../../components/common/UI/Button/Button';
import { buttonRoles } from '../../components/common/UI/Button/ButtonRoles';
import Form from '../../components/common/UI/Form/Form';
import { Size } from '../../components/common/UI/utils';
import { mainParams } from '../../utils/lng-variables';
import CalculatorLayout from './CalculatorLayout';

const Calculator = () => {
    const mainForm = (
        <Form id='mainForm' size={new Size(4, 2)} fields={mainParams} />
    );
    const mainFormButton = (
        <Button role={buttonRoles.main} type='submit' form='mainForm'>
            Calculate
        </Button>
    );
    const moreOptionButton = (
        <Button role={buttonRoles.extra}>more options
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
