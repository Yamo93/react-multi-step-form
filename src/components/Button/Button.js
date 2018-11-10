import React from 'react';
import styles from './Button.module.scss';

const button = (props) => {
    let classes = [styles.contact__formSubmit];

    if (props.content === 'Back') {
        classes.push(styles.contact__formSubmitOrange);
    }
    return (
        <button onClick={(type, step) => props.changedStep(props.content, props.currentStep)} type="button" className={classes.join(' ')}>{props.content}</button>
    );
};

export default button;