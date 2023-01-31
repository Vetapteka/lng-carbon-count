import React from 'react';
import Button from '../../components/common/UI/Button/Button';
import { buttonRoles } from '../../components/common/UI/Button/ButtonRoles';
import Form from '../../components/common/UI/Form/Form';
import { Size } from '../../components/common/UI/utils';
import { mainParams } from '../../utils/lng-variables';
import CalculatorLayout from './CalculatorLayout';

const Calculator = () => {
    return (
        <CalculatorLayout
            mainForm={<Form size={new Size(4, 2)} fields={mainParams} />}
            mainFormButton={<Button role={buttonRoles.main}>Calculate</Button>}
            mainFormExtraBtn={
                <Button role={buttonRoles.extra}>more options</Button>
            }
        />
    );
};

export default Calculator;
