import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class TheInspiration extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render(){
    return ( 
      <div>
        <br/>
        <Container>
          <Row>
            <Col>
            <h1>Inspired by Beer City USA!</h1>
            <img src= 'https://i.pinimg.com/originals/41/33/47/4133474020005c6673f13765de96c66d.png' className= 'beerCityImage' alt="beer city"/>
            </Col>
            <Col>
            <p>This app from it's inception harkens back to an experience I had up in Beer City USA - Grand Rapid's Michigan.
              The city itself sponsored what they coined as their 'Beer Passport' & it was intended to be a way for patrons to
              explore the cities breweries in a tour of sorts that established a cultural telos of visiting more and more 
              small businesses in a quest for brewery stamps (of their logo's) and collectable prizes provided you meet requirements 
              to qualify (like visiting 5 breweries and earning all the stamps).
            </p>
            <p>
              Of course this stemmed interest for myself but I could not understand why a city would invest in a product that is, 
              less green, less accessable to the masses and lastly less expansive thinking. This app in development will be a basis
              for potentially limitless brewery exploration outside the stomping grounds of the Raleigh / Durham / Chapel Hill Triangle - 
              at least that is the vision! 
            </p>
            <p>
              Please, test, explore and reach out on content suggestions as we launch a revolutionary partner in crime to your favorite 
              beer related apps like <em> UnTapp'd </em> and other wonderful beer exploratory applications
            </p>
            <Button 
              onClick={this.toggle}>{this.props.buttonLabel}
              
                Content Suggestions
              </Button>
            </Col>
          </Row>

          {/* modal content will render once button is clicked */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Cheers Mate & Thank You! </ModalHeader>
          <ModalBody>
            <p>Please input your email, and your 'constructive' content suggestions: </p>
            <Form>
              <FormGroup>
                <Label for='ageChecking'>Email:</Label>
                <Input className='email'  placeholder='beerChamp@gmail.com'></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Suggestion Message:</Label>
                <Input type="textarea" name="text" id="suggestionMsg" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Container>
      </div>
    );
  }
}
 
export default TheInspiration;