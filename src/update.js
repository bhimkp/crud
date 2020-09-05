import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Form,
} from "reactstrap";

// import { FormGroup, FormLabel, FormControl, Button, Form, Row, Col } from 'react-bootstrap';

class UpdateUser extends Component {
  state = {
    modal: true,
    formData: { id: "", name: "", email: "" },
  };

  toggle = () =>
    this.setState({
      modal: !this.state.modal,
    });

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.formData);
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Name</Label>{" "}
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>{" "}
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Update
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UpdateUser;

/* <Row>
            <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl type="text" name="name" value={this.state.name}
            onChange={this.handleChange} />
            </FormGroup>
            <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl type="text" name="email" value={this.state.email}
            onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <FormControl type="hidden" name="id" value={this.state.id} />
            <Button variant="success" type="submit">Update</Button>
            </FormGroup>
            </Form>
            </Col>
            </Row> */
