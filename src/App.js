import React, { Component } from 'react';
import './App.css';
import ContactBox from './components/ContactBox/ContactBox';

 /**
  * TODOS:
  * - you have to create state: for saving the current step, as well as saving the inputs. => 60% DONE. I managed to save the inputs in the global state. Now I have to save the current step too, and render new inputs for the second step => DONE!!!
  * - render the button styling/amount of buttons/text on buttons depending on the step => DONE!!!
  * - add the third step which shows all the user info (confirmation step). It should only have one button "Submit" or something.  => DONE
  * 
  * - the fourth step should be showing a success message. => DONE
  * - the Back button should have a special color (orangish) => DONE
  * - add an error message if user tries to continue without filling forms (with a set Interval maybe, plain red bold big-sized text at the top) => DONE
  * add validation so that it cannot continue without all fields filled in => DONE :D
  * 
  * SUGGESTIONS:
  * - add Firebase to the backend so the data is really submitted and presented
  * - third step should just be confirmation (do you want to submit the following data to the database basically...)
  * - then the fourth step should actually be grabbed from the Firebase. and the data should be returned to the user, with a success message saying that the data was successfully persisted in the backend
  * - maybe add some "step tracking" like 1/3, 2/3 which changes,so the user knows where s/he is. it would be nice if it could be UI-friendly, like having a cool "line with circles" that get filled as the user turns the page
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
    currentStep: 1, 
    error: false
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

changeStepHandler = (type, step) => {
  if (type === 'Continue' && step === 1) {
    if (this.state.userInfo.name && 
        this.state.userInfo.email && 
        this.state.userInfo.password) {
          this.setState((prevState, props) => {
            return {error: false, currentStep: prevState.currentStep + 1};
          })
        } else {
          this.setState({error: true});
        }
  } else if (type === 'Continue' && step === 2) {
    if (this.state.userInfo.country && 
      this.state.userInfo.city && 
      this.state.userInfo.profession) {
        this.setState((prevState, props) => {
          return {error: false, currentStep: prevState.currentStep + 1};
        })
      }  else {
        this.setState({error: true});
      }
  } else if (type === 'Submit' && step === 3) {
    this.setState((prevState, props) => {
      return {error: false, currentStep: prevState.currentStep + 1};
    })
  } else if (type === 'Back') {
    console.log('we went back');
    this.setState((prevState, props) => {
      return {error: false, currentStep: prevState.currentStep - 1};
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
        <ContactBox errorCondition={this.state.error} userInfo={this.state.userInfo} currentStep={this.state.currentStep} changedInfo={this.grabInputHandler} changedStep={this.changeStepHandler} />
      </div>
    );
  }
}

export default App;
