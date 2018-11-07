import React from 'react';
import styles from './Wrapper.module.scss';

const wrapper = (props) => <div className={styles.Wrapper}>{props.children}</div>;

export default wrapper;