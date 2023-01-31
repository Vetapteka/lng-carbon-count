import React from 'react';
import classes from './CalculatorLayout.module.css';

const CalculatorLayout = ({ mainForm, mainFormButton, mainFormExtraBtn }) => {
    return (
        <div className={classes.body}>
            <div className={classes.main_form}>{mainForm}</div>
            <div className={classes.main_form__button}>{mainFormButton}</div>
            <div className={classes.main_form__button_extra}>
                {mainFormExtraBtn}
            </div>
        </div>
    );
};

export default CalculatorLayout;
