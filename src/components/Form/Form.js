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
                <Button content="Back" changedStep={this.props.changedStep} userInfo={this.state} currentStep={this.props.currentStep} />
                <Button content="Continue" changedStep={this.props.changedStep} userInfo={this.state} currentStep={this.props.currentStep} />
            </Fragment>
        );

        let inputs;
        let confirmation;
        switch (this.props.currentStep) {
            case (1): {
                buttons = <Button content="Continue" changedStep={this.props.changedStep} userInfo={this.state} currentStep={this.props.currentStep} />;
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

            case (3): {
                confirmation = (
                    <Fragment>
                    <h1 style={{textAlign: 'center', width: '100%'}}>Your user information is:</h1>
                    
                    <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', fontSize: '18px'}}>
                        <li><strong>Name: </strong>{this.props.userInfo.name}</li>
                        <li><strong>Email: </strong>{this.props.userInfo.email}</li>
                        <li><strong>Password: </strong>{this.props.userInfo.password.split('').map((char, index) => {
                            if (index === 0) {
                                return char;
                            }
                            char = '*';
                            return char;
                        })}</li> {/*this should be hidden by default*/}
                        <li><strong>Country: </strong>{this.props.userInfo.country}</li>
                        <li><strong>City: </strong>{this.props.userInfo.city}</li>
                        <li><strong>Profession: </strong>{this.props.userInfo.profession}</li>
                    </ul>

                    <p style={{fontSize: '20px', textAlign: 'center', width: '100%'}}>The info is correct, complete this registration.</p>
                    </Fragment>
                );
                buttons = (
                    <Fragment>
                        <Button content="Back" changedStep={this.props.changedStep} userInfo={this.state} currentStep={this.props.currentStep} />
                        <Button content="Submit" changedStep={this.props.changedStep} userInfo={this.state} currentStep={this.props.currentStep} />
                    </Fragment>
                );
                break;
            }

            case (4): {
                confirmation = (
                    <div style={{width: '100%'}}>
                    <h1 style={{width: '100%', textAlign: 'center', transform: 'translateY(-90px)'}}>Your registration was successful :)</h1>
                    <p style={{fontSize: '20px', width: '100%', textAlign: 'center', transform: 'translateY(-50px)'}}>We'll send you an email with the details.</p>
                    </div>
                );
                buttons = null;
                break;
            }

            default: {
                break;
            }
        }

        return (
            <div className={styles.contact__form}>
            {inputs}
            {confirmation}
            <Wrapper currentStep={this.props.currentStep}>
                {buttons}
            </Wrapper>
        </div>
        );
    }
}

export default Form;