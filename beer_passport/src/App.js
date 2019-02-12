import React, { Component } from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
// import LoginAgeVerification from './components/loginComponents/loginAgeQuery';
import NavTabs from './components/navtabs';     //not sure if this will be how I render the logged in tabs
// import Container from './components/container';
// import FlipPage from './components/pgFlip';
// import NavBAR from './components/navbar';
import LoginPg from './pages/loginPg';
import BreweriesPg from './pages/breweriesPg';
import ProfilePg from './pages/profilePg';
import AboutPg from './pages/aboutPg';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOfAge: false  //will correspond with the loginAgeQuery.js
    }
  }

  loggedInRendering = () =>{
    if(this.state.isOfAge){
      return<NavTabs/>
    }
  }

  toggleLoggedIn = () => {
    this.setState({isOfAge: !this.state.isOfAge}); // attempting to toggle from isOfAge trying to stimulate 'true'
  }

  render() {
    return (
     
      // creating routes for logging (ie verifying age), section for creating profile (may use passport, or google auth), 
      // have a route to link to the breweries locally in raleigh may use API to render this data
      // about page will be about development, intent and the future app projections upon backing. 
        <Router>
          <div className = 'backgroundImage'>
            {this.loggedInRendering()} 
            <Route exact path = '/' render = {(props) => <LoginPg {...props} toggleLoggedIn = {this.toggleLoggedIn}/>} />
            <Route exact path = '/profile' component = {ProfilePg}/>
            <Route exact path = '/breweries' component = {BreweriesPg}/>
            <Route exact path = '/about' component = {AboutPg}/>
          </div>
        </Router>
      

    );
  }
}

export default App;
