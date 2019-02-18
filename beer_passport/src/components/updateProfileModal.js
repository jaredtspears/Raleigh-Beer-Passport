import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, FormGroup, Input } from 'reactstrap';

class UpdateProfileModal extends React.Component {
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

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Update Profile </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Updating Profile</ModalHeader>
          <ModalBody>
            Update now so you wont miss out on your passport's stamp collection!
          
          {/* form content */}
          <Form>
              <FormGroup>
                <Label>Current Email:</Label>
                <Input className='current-email'  placeholder='beerSnob@gmail.com'></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Passport Slogan:</Label>
                <Input type="textarea" name="text" id="slogan" />
              </FormGroup>
            </Form>
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateProfileModal;
