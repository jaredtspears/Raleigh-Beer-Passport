//TODO attempting to emulate this style but in a react component: 
//https://stackoverflow.com/questions/15738782/age-validation-javascript

//TODO not sure how to get this is ov age function to be called... Work In Progress
//function was tested and worked in a normal js file (basic but it does work)

import React, { Component } from 'react';

class DOBvalidation extends Component {
  state = { 

   }

   isOfAge = event =>{
     event.preventDefault();
     console.log('isOfAge() was called ... Pending development')
    //  function Age_validator(str){
    //   // which user inputs
    //   str = str.split("-");
    //   const dd = str[0];
    //   const mm = str[1];
    //   const yy = str[2];
    //   // Current date calculation
    //   const d = new Date();
    //   const ds = d.getDate();
    //   const ms = d.getMonth();
    //   const ys = d.getFullYear();
    //   // convert 21 years as days from current date
    //   const days = ((21 * 12) * 30) + (ms * 30) + ds;
    //   // convert days from input value
    //   const age = (((ys - yy) * 12) * 30) + ((12 - mm) * 30) + parseInt(30 - dd);
    
    //   if((days - age) <= '0'){
    //       console.log((days - age));
    //       document.getElementById('dob1').innerHTML = 'Valid';
    //       // or return your own script
    //   }else{
    //       console.log((days - age));
    //       document.getElementById('dob1').innerHTML = 'Under 21, cannot use this app...Sorry';
    //       // or return your own script
    //   }
    // }
   }




  render() { 
    return ( 
      <div>

        <input 
          type='text' 
          name='dob' 
          onBlur= {this.isOfAge} 
          />
                  
        <div> <span id="dob1"></span></div>
      </div>
     );
  }
}
 
export default DOBvalidation;
