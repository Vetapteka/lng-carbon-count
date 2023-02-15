import React from 'react';
import classes from './CalculatorLayout.module.css';

const CalculatorLayout = ({ mainForm, mainFormButton, moreOptionButton }) => {
    return (
        <div className={classes.body}>
            <div className={classes.main_form}>{mainForm}</div>
            <div className={classes.main_form__button}>{mainFormButton}</div>
            <div className={classes.main_form__button_extra}>
                {moreOptionButton}
            </div>
        </div>
    );
};

export default CalculatorLayout;
