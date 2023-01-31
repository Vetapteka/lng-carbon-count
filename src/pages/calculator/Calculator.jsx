import React from 'react';
import Button from '../../components/common/UI/Button/Button';
import { buttonRoles } from '../../components/common/UI/Button/ButtonRoles';
import Form from '../../components/common/UI/Form/Form';
import { Size } from '../../components/common/UI/utils';
import { mainParams } from '../../utils/lng-variables';
import classes from './Calculator.module.css';

const Calculator = () => {
    return (
        <div className={classes.body}>
            <div className={classes.main_form}>
                <Form
                    className={classes.main_form}
                    size={new Size(4, 2)}
                    fields={mainParams}
                />
            </div>
            <div className={classes.main_form__button}>
                <Button role={buttonRoles.main}>Calculate</Button>
            </div>
            <div className={classes.main_form__button_extra}>
                <Button role={buttonRoles.extra}>more options</Button>
            </div>
        </div>
    );
};

export default Calculator;
