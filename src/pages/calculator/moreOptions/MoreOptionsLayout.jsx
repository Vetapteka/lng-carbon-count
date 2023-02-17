import React from 'react';
import Section from '../../../components/common/Section';
import classes from './MoreOptionsLayout.module.css';

const MoreOptionsLayout = ({
    generalForm,
    emissionForm,
    parametersForm,
    button,
}) => {
    return (
        <div className={classes.body}>
            <Section title='Emission intensity'>{emissionForm}</Section>
            <Section title='General form'>{generalForm}</Section>
            <Section title='parameters for calculation'>
                {parametersForm}
            </Section>
            <div className={classes.button_grid}>{button}</div>
        </div>
    );
};

export default MoreOptionsLayout;
