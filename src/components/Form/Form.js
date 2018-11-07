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

    test = () => {
        console.log('test');
    }

    grabInputHandler = (event) => {
        //console.log(this.props.submitted());
        if (event.target.id === 'name') {
            this.setState({
                name: event.target.value
            });
        } else if (event.target.id === 'email') {
            this.setState({
                email: event.target.value
            });
        } else if (event.target.id === 'password') {
            this.setState({
                password: event.target.value
            });
        }
    }

    render () {
        // Make it a switch statement: and don't forget to pass the value of the button
        let buttons = (
            <Fragment>
                <Button submitted={this.props.submitted} userInfo={this.state} />
                <Button submitted={this.props.submitted} userInfo={this.state} />
            </Fragment>
        );
        if (this.props.currentStep === 1) {
            buttons = <Button submitted={this.props.submitted} userInfo={this.state} />;
        }
        return (
            <div className={styles.contact__form}>
            <label htmlFor="name" className={styles.contact__formNamelab}>Name:</label>
            <input onChange={(event) => this.grabInputHandler(event)} type="text" id="name" className={styles.contact__formNameinput} placeholder="Insert your name here..." />
            <label htmlFor="email" className={styles.contact__formMaillab}>Email:</label>
            <input onChange={(event) => this.grabInputHandler(event)} type="email" id="email" className={styles.contact__formMailinput} placeholder="Insert your email address here..."/>
            <label htmlFor="message" className={styles.contact__formMsglab}>Password:</label>
            <input onChange={(event) => this.grabInputHandler(event)} type="password" id="password" className={styles.contact__formMsginput} placeholder="Choose your preferred password..." />
            {/* 
            - You have to change the Wrapper setting (justify-content: center/space-between) depending on whether there it is step 2/3 or just step 1. 
            - Add props to button to modify the name of the actual button "Continue, Back, Submit" etc. Maybe even have a special color for the Back-button
            */}
            <Wrapper currentStep={this.props.currentStep}>
                {/* <Button /> */}
                {buttons}
            </Wrapper>
        </div>
        );
    }
}

export default Form;