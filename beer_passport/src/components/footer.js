import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const Footer = () => {
  return ( 
    <div className ='fixed-bottom'>
    <Navbar color='dark' dark>
      <Container >
        
          <NavbarBrand >
            A Ha1f_Deaf Creation
          </NavbarBrand>
          <NavbarBrand>
            {/* <a href= 'www.linkedin.com/in/jared-spears-ha1f-deaf'>LinkedIn</a>
              <br/>
            <a href = 'https://github.com/jaredtspears'>Host's GitHub</a> */}
          </NavbarBrand>
        
      </Container>
    </Navbar>

    </div>
   );
}
 
export default Footer;