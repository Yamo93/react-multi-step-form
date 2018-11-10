import React from 'react';
import styles from './ContactBox.module.scss';
import Form from '../Form/Form';

const contactBox = (props) => {
    return (
        <div className={styles.contact}>
            <h1 className={styles.contact__title}>User Registration</h1>
            <p className={styles.contact__desc}>Please fill in this multi-step form for registration:</p>
        <Form error={props.errorCondition} userInfo={props.userInfo} changedInfo={props.changedInfo} changedStep={props.changedStep} currentStep={props.currentStep} />
        </div>
    );
};

export default contactBox;