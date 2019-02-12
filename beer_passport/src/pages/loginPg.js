import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeaderJumbotron from '../components/jumbotron';
import PassportProfileData from '../components/passportProfileData';

function LoginPg(props){
  return(
    <div>
      <Navbar/>
        <HeaderJumbotron/>
        <PassportProfileData/>
      <Footer/>
    </div>
  )
}

export default LoginPg;