import React, { Component, Fragment } from 'react';
import styles from './Form.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

class Form extends Component {
    state = {
        name: '', 
        email: '',
        password: ''
    };

    render () {
        // Make it a switch statement: and don't forget to pass the value of the button
        let buttons = (
            <Fragment>
                <Button content="Back" changedStep={this.props.changedStep} userInfo={this.state} />
                <Button content="Continue" changedStep={this.props.changedStep} userInfo={this.state} />
            </Fragment>
        );

        let inputs;
        switch (this.props.currentStep) {
            case (1): {
                buttons = <Button content="Continue" changedStep={this.props.changedStep} userInfo={this.state} />;
            inputs = (
            <Fragment>
                <label htmlFor="name" className={styles.contact__formNamelab}>Name:</label>
                <input onChange={(event) => this.props.changedInfo(event)} type="text" id="name" className={styles.contact__formNameinput} placeholder="Insert your name here..." value={this.props.userInfo.name} required />
                <label htmlFor="email" className={styles.contact__formMaillab}>Email:</label>
                <input onChange={(event) => this.props.changedInfo(event)} type="email" id="email" className={styles.contact__formMailinput} placeholder="Insert your email address here..." value={this.props.userInfo.email} required />
                <label htmlFor="message" className={styles.contact__formMsglab}>Password:</label>
                <input onChange={(event) => this.props.changedInfo(event)} type="password" id="password" className={styles.contact__formMsginput} placeholder="Choose your preferred password..." value={this.props.userInfo.password} required />
            </Fragment>
            );
                break;
            }

            case (2): {
                inputs = (
                    <Fragment>
                        <label htmlFor="country" className={styles.contact__formNamelab}>Country:</label>
                        <input onChange={(event) => this.props.changedInfo(event)} type="text" id="country" className={styles.contact__formNameinput} placeholder="Which country do you live in?" value={this.props.userInfo.country} required />
                        <label htmlFor="city" className={styles.contact__formMaillab}>City:</label>
                        <input onChange={(event) => this.props.changedInfo(event)} type="text" id="city" className={styles.contact__formMailinput} placeholder="Which city do you reside in?" value={this.props.userInfo.city} required />
                        <label htmlFor="message" className={styles.contact__formMsglab}>Profession:</label>
                        <input onChange={(event) => this.props.changedInfo(event)} type="text" id="profession" className={styles.contact__formMsginput} placeholder="What is your profession?" value={this.props.userInfo.profession} required />
                    </Fragment>
                    );
                break;
            }

            default: {
                break;
            }
        }

        return (
            <div className={styles.contact__form}>
            {inputs}
            <Wrapper currentStep={this.props.currentStep}>
                {/* <Button /> */}
                {buttons}
            </Wrapper>
        </div>
        );
    }
}

export default Form;