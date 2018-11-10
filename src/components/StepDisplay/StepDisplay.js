import React from 'react';
import styles from './StepDisplay.module.scss';

const stepDisplay = (props) => {
    return (
        <div className={styles.Track}>
            <div className={props.currentStep === 1 ? [styles.Step1, styles.Active].join(' ') : styles.Step1}></div>
            <div className={props.currentStep === 2 ? [styles.Step2, styles.Active].join(' ') : styles.Step2}></div>
            <div className={props.currentStep === 3 ? [styles.Step3, styles.Active].join(' ') : styles.Step3}></div>
            <div className={props.currentStep === 4 ? [styles.Step4, styles.Active].join(' ') : styles.Step4}></div>
        </div>
    );
};

export default stepDisplay;