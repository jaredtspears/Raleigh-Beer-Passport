import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const PassportProfileData = () => {
  return ( 
    <div>
      <Container>
        <Row>
          <Col>
          <p>PASSPORT</p>
          <p>BEER PASSPORT</p>
          </Col>
          <Col>
            <h4>%Country%</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Media object data-src= 'holder.js/64x64' alt = 'placeholder image'/>
          </Col>
          <Col>
            <h5>TypeType</h5>
              <p>Patron</p>
            <h5>SurName</h5>
              <p>%SurName% </p>
            <h5>Given Name</h5>
              <p>%FName% </p>
            <h5>Nationality</h5>
              <p>%Nationality% </p>
            <h5>Legal Beer Birth</h5>
              <p>%Beer DOB (only Month and Yr)% </p>
            <h5>Issue Date</h5>
              <p>%DateOfSignUp% </p>
          </Col>
        </Row>
      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
   );
}
 
export default PassportProfileData;