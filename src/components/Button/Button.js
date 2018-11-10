import React from 'react';
import styles from './Button.module.scss';

const button = (props) => {
    console.log(props.content);
    // you shouldnt change the state on clicks. you should change them on changes. and the only thing the click will do is change the currentStep
    return (
        <button onClick={(type, step) => props.changedStep(props.content, props.currentStep)} type="button" className={styles.contact__formSubmit}>{props.content}</button>
    );
};

export default button;