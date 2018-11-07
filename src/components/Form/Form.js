import React from 'react';
import styles from './Form.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

const form = (props) => {
    return (
        <form className={styles.contact__form}>
            <label for="name" className={styles.contact__formNamelab}>Name:</label>
            <input type="text" id="name" className={styles.contact__formNameinput} placeholder="Insert your name here..." />
            <label for="email" className={styles.contact__formMaillab}>Email:</label>
            <input type="email" id="email" className={styles.contact__formMailinput} placeholder="Insert your email address here..."/>
            <label for="message" className={styles.contact__formMsglab}>Password:</label>
            <input type="password" id="message" className={styles.contact__formMsginput} placeholder="Choose your preferred password..." />
            {/* 
            - You have to change the Wrapper setting (justify-content: center/space-between) depending on whether there it is step 2/3 or just step 1. 
            - Add props to button to modify the name of the actual button "Continue, Back, Submit" etc. Maybe even have a special color for the Back-button
            */}
            <Wrapper>
                <Button />
                <Button />
            </Wrapper>
        </form>
    );
};

export default form;