import React from 'react';
import styles from './ContactBox.module.scss';
import Form from '../Form/Form';

const contactBox = (props) => {
    return (
        <div className={styles.contact}>
        {/* Outsource these into smaller components. Also the button should be narrower, there should be two buttons on step 2 and 3 (Continue-Back), and the last step should be (Submit) */}
            <h1 className={styles.contact__title}>User Registration</h1>
            <p className={styles.contact__desc}>Please fill in this multi-step form for registration:</p>
        <Form submitted={props.submitted} currentStep={props.currentStep} />
        </div>
    );
};

export default contactBox;