import React, { Component } from 'react';
import './App.css';
import ContactBox from './components/ContactBox/ContactBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactBox />
      </div>
    );
  }
}

export default App;
