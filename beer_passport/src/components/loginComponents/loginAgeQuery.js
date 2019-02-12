// this component will be used to create a simple form that checks if the user
//is of drinking age and allows access to the app upon the user enter +21yrs age

import React, { Component } from 'react';
// import Container from '../container';
// import AccessGranted from './AccessGranted'; //created this component but at this time it is not developed
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

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
        
        {/* should implement container in another component later */}
        <div className= 'container'> 
        <h1>Are you of drinking age?</h1>
          <Form>
            <FormGroup>
              <Label for='ageChecking'>Enter Your Date of Birth:</Label>
              <Input className='usersAge' label = 'Validate Age' placeholder='Input your age here'></Input>
              <Button 
                onClick = {() => {}}
                className='submit'>
                  Enter
              </Button>
              <Button className='leave'>Leave</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
     );
  }
}
 
export default loginAgeVerification;