import React from 'react'
import Navbar from '../components/navbar';
import HeaderJumbotron from '../components/jumbotron';
import Footer from '../components/footer';


// import LoggedInRendering from '../components/MainPgComponents/NavTabs/loggedInRendering'

function ProfilePg() {
  return (
    <div>
      <Navbar/>
        <HeaderJumbotron/>
      <Footer/>
    </div>

  )
}

export default ProfilePg;