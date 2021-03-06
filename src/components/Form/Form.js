import React, { Component, Fragment } from 'react';
import styles from './Form.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import axios from '../../axios-userdata';

class Form extends Component {
    state = {
        retrievedData: null, 
        finishedLoading: false
    };

    componentDidUpdate() {
        if (this.props.infoID) {
            if (!this.state.finishedLoading && (!this.state.retrievedData || (this.state.retrievedData && this.state.retrievedData.name !== this.props.infoID))) {
                let ID = this.props.infoID;
                console.log(ID);
                axios.get('/userinfo.json')
                .then(response => {
                    this.setState({retrievedData: response.data[ID], finishedLoading: true}); // this causes an infinite loop
                    this.props.loaded();
                });
            }
        }
    }

    render () {
        let errorMessage = null;

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
            if (this.props.error) {
                if (!this.props.userInfo.name || !this.props.userInfo.email) {
                 errorMessage = <h3 style={{color: 'red', fontSize: '20px', width: '100%', textAlign: 'center'}}>Please fill all fields.</h3>;
                } else if (this.props.userInfo.password.length <= 5) {
                 errorMessage = <h3 style={{color: 'red', fontSize: '20px', width: '100%', textAlign: 'center'}}>The password has to be at least six characters.</h3>;
                }
             } else {
                 errorMessage = null;
             }
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
                    if (this.props.error) {
                        if (!this.props.userInfo.country || !this.props.userInfo.city || !this.props.userInfo.profession) {
                         errorMessage = <h3 style={{color: 'red', fontSize: '20px', width: '100%', textAlign: 'center'}}>Please fill all fields.</h3>;
                        }
                     } else {
                         errorMessage = null;
                     }
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
                let name = null;
                let email = null;
                if (this.state.retrievedData) {
                    name = this.state.retrievedData.name;
                    email = this.state.retrievedData.email;
                }
                confirmation = (
                    <div style={{width: '100%'}}>
                    <h1 style={{width: '100%', textAlign: 'center', transform: 'translateY(-90px)'}}>Welcome onboard, {name} <span role="img" aria-label="blinkingface">😉</span>!</h1>
                    <p style={{fontSize: '20px', width: '100%', textAlign: 'center', transform: 'translateY(-50px)'}}>We'll send you an email to <strong>{email}</strong> with the details.</p>
                    </div>
                );

                if (this.props.loadingCondition) {
                    confirmation = <Loader />;
                }

                buttons = null;
                break;
            }

            default: {
                break;
            }
        }

        return (
            <div className={styles.contact__form}>
            {errorMessage}
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