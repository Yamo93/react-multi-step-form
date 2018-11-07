import React from 'react';
import styles from './Button.module.scss';

const button = (props) => <button onClick={(name, email, password) => props.submitted(props.userInfo.name, props.userInfo.email, props.userInfo.password)} type="button" className={styles.contact__formSubmit}>Continue</button>;

export default button;