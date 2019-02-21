//*in process of converting this to a modal (use updateProfileModal.js as example)

import React, { Component } from 'react';
// import Container from '../container';
// import AccessGranted from './AccessGranted'; //created this component but at this time it is not developed
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import CurDate from './date';

class loginAgeVerification extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      age: false, //setting age to false initially which will deny access to new user
      userAge: [], //set user's age to blank array - this will be populated later and then evaluated
      modal:false, 
      date: 'drinkingDate'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // ageAnalizer = () => {
  //   if(this.state.age){
  //   // return <AccessGranted/>
  //   }
  // } 

  //!if this wont cannot be fixed I will install and try to use the react-datetime npm package... the textContent is reading 'null'
   //!tried this.state.date but that just rendered the string from the state....
  date = () =>{
    var now, year, month;

    now= new Date();
    year= now.getFullYear();
    month=now.toLocaleDateString( 'en-us', {month: 'long', day: 'numeric'});

    document.getElementById('curDate').textContent = month + ' ' + year;
  }

  render() { 
 
    return ( 
      <div >
        
        {/* should implement container in another component later */}
        <div className= 'container'> 
        <h1>Are you of drinking age?</h1>

        <h3>Your age Should be on this day 21 years ago:</h3>
          {/* <p 
            id= 'curDate' 
            >
            {this.state.date} 
          </p> */}
        
          <CurDate/> 
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