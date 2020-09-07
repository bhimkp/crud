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
    // setEditing: false,
    currentUser: this.props.currentUser,
  };
  toggle = () =>
    this.setState({
      modal: !this.state.modal,
    });

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      currentUser: {
        ...this.state.currentUser,
        [name]: value,
      },
    });
  };

  // handleEmail = (event) => {
  //   const email = event.target.email;
  //   const value = event.target.value;
  //   this.setState({ currentUser: { [email]: value } });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.toggle();
    this.onFormSubmit(this.state.currentUser);
    // this.setState(this.state.currentUser);
  };
  onFormSubmit = (data) => {
    console.log(data);
    fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          response: result,
        });
      });
    this.props.updateUserFun(this.state.currentUser);
    // console.log(this.props);
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form>
            <ModalHeader toggle={this.toggle}>Update user</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Name</Label>{" "}
                <input
                  type="text"
                  name="name"
                  value={this.state.currentUser.name}
                  // onChange={(event) =>
                  //   this.setState({
                  //     currentUser: { name: event.target.value },
                  //   })
                  // }
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>{" "}
                <input
                  type="text"
                  name="email"
                  value={this.state.currentUser.email}
                  // onChange={(event) =>
                  //   this.setState({
                  //     currentUser: { email: event.target.value },
                  //   })
                  // }
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>
                Submit
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
