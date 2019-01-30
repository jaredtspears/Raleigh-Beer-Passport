import React, { Component } from 'react';
import LoginAgeVerification from './components/loginComponents/loginAgeQuery';
// import Container from './components/container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <LoginAgeVerification/>
      
      </div>
    );
  }
}

export default App;
