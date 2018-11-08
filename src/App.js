import React, { Component } from 'react';
import './App.css';
import ContactBox from './components/ContactBox/ContactBox';

 /**
  * TODOS:
  * - you have to create state: for saving the current step, as well as saving the inputs. => 60% DONE. I managed to save the inputs in the global state. Now I have to save the current step too, and render new inputs for the second step
  * - render the button styling/amount of buttons/text on buttons depending on the step
  * 
  * 
  * SUGGESTIONS:
  * - add Firebase to the backend so the data is really submitted and presented
  * 
  */

class App extends Component {
  state = {
    userInfo: {
      name: '',
      email: '',
      password: '', 
      country: '', 
      city: '', 
      profession: ''
    }, 
    currentStep: 1
  };

  grabInputHandler = (event) => {
    let savedValue = event.target.value;
    switch (event.target.id) {
      case ('name'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: savedValue,
            email: prevState.userInfo.email,
            password: prevState.userInfo.password, 
            country: prevState.userInfo.country, 
            city: prevState.userInfo.city, 
            profession: prevState.userInfo.profession
            }
          }
        });
        break;
      }
      case ('email'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: prevState.userInfo.name,
            email: savedValue,
            password: prevState.userInfo.password, 
            country: prevState.userInfo.country, 
            city: prevState.userInfo.city, 
            profession: prevState.userInfo.profession
            }
          }
        });
        break;
      }
      case ('password'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: prevState.userInfo.name,
            email: prevState.userInfo.email,
            password: savedValue, 
            country: prevState.userInfo.country, 
            city: prevState.userInfo.city, 
            profession: prevState.userInfo.profession
            }
          }
        });
        break;
      }
      case ('country'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: prevState.userInfo.name,
            email: prevState.userInfo.email,
            password: prevState.userInfo.password, 
            country: savedValue, 
            city: prevState.userInfo.city, 
            profession: prevState.userInfo.profession
            }
          }
        });
        break;
      }
      case ('city'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: prevState.userInfo.name,
            email: prevState.userInfo.email,
            password: prevState.userInfo.password, 
            country: prevState.userInfo.country, 
            city: savedValue, 
            profession: prevState.userInfo.profession
            }
          }
        });
        break;
      }
      case ('profession'): {
        this.setState((prevState, props) => {
          return {userInfo: {
            name: prevState.userInfo.name,
            email: prevState.userInfo.email,
            password: prevState.userInfo.password, 
            country: prevState.userInfo.country, 
            city: prevState.userInfo.city, 
            profession: savedValue
            }
          }
        });
        break;
      }
      default: {
        break;
      }
    }
}

changeStepHandler = (step) => {
  if (step === 'Continue') {
    this.setState((prevState, props) => {
      return {currentStep: prevState.currentStep + 1};
    })
  } else if (step === 'Back') {
    console.log('we went back');
    this.setState((prevState, props) => {
      return {currentStep: prevState.currentStep - 1};
    })
  }
}

/*
  grabInfoHandler = (name, email, password, type) => {
    if (type === 'Continue') {
      this.setState((prevState, props) => {
        return {
          userInfo: {
          name: name, 
          email: email, 
          password: password
        }, 
        currentStep: prevState.currentStep + 1}
      });
      //event.preventDefault();
    } else if (type === 'Back') {
      this.setState((prevState, props) => {
        return {currentStep: prevState.currentStep - 1}
      });
    }
  }
  */

  render() {
    return (
      <div className="App">
        <ContactBox userInfo={this.state.userInfo} currentStep={this.state.currentStep} changedInfo={this.grabInputHandler} changedStep={this.changeStepHandler} />
      </div>
    );
  }
}

export default App;
