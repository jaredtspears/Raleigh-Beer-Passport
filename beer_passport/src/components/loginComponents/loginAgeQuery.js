// this component will be used to create a simple form that checks if the user
//is of drinking age and allows access to the app upon the user enter +21yrs age

import React, { Component } from 'react';
// import Container from '../container';
// import AccessGranted from './AccessGranted'; //created this component but at this time it is not developed
// import {Row, Input} from 'react-materialize';

class loginAgeVerification extends Component {
  state = { 
    age: false, //setting age to false initially which will deny access to new user
    userAge: [] //set user's age to blank array - this will be populated later and then evaluated
   }


  ageAnalizer = () => {
    if(this.state.age){
    // return <AccessGranted/>
    }
  } 


  render() { 
 //may install a function for verifying age here - this would be done with a callback function that sorts through an array of ages (may need AGE calcuationg API installed)
    return ( 
      <div>
        
        <h1>Are you of drinking age?</h1>
        {/* should implement container in another component later */}
        <div className= 'container'> 
          <form>
            <input className='usersAge' label = 'Validate Age' placeholder='Input your age here'></input>
          </form>
        </div>
      </div>
     );
  }
}
 
export default loginAgeVerification;