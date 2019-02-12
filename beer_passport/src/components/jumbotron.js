import React from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';
import UpdateProfileContent from './updateProfileModal';

const HeaderJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row className = 'justify-content-center'>
            <h1 className="display-3">Welcome To Your Local Beer Passport!</h1>
            <p className="lead">Remember to stay current with your profile data to ensure smooth enjoyment of this fun tour.</p>
          </Row>
          <hr/>
          <Row className = 'justify-content-center'>
            <UpdateProfileContent/>
          </Row >
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HeaderJumbotron;