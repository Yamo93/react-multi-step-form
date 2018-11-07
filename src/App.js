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
      password: ''
    }, 
    currentStep: 1
  };

  grabInfoHandler = (name, email, password) => {
    console.log(name, email, password);
    this.setState({userInfo: {
      name: name, 
      email: email, 
      password: password
    }});
    //event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <ContactBox currentStep={this.state.currentStep} submitted={this.grabInfoHandler} />
      </div>
    );
  }
}

export default App;
