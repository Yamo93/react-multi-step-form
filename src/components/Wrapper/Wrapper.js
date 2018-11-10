import React from 'react';
import styles from './Wrapper.module.scss';

const wrapper = (props) => {
    let classes = [];
    classes.push(styles.Wrapper);
    if (props.currentStep === 1) {
        classes.push(styles.WrapperCenterized);
    }

    return (
    <div className={classes.join(' ')}>{props.children}</div>
    );
}


export default wrapper;