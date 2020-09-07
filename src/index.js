import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./cards";

import UpdateUser from "./update";

// import DeleteUser from './delete';

import { Button, Row, Col } from "reactstrap";

class Users extends Component {
  state = {
    error: null,
    isLoaded: false,
    data: [],
    currentUser: { id: "", name: "", email: "" },
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  DeleteId = (user) => {
    console.log(user.id);
    const data = this.state.data.filter((i) => i.id !== user.id);
    this.setState({ data });
    //console.log(this.state.data);
  };

  updateOriginal = (user) => {
    console.log(user);
    let users = [...this.state.data];
    let currUser = this.state.data.filter((u) => user.id === u.id)[0];
    console.log(currUser);
    currUser.name = user.name;
    currUser.email = user.email;
    console.log(currUser);
    users[currUser.id - 1] = currUser;
    // console.log(users);
    this.setState({
      data: users,
    });
    // this.setState({
    //   data: { this.state.data.findIndex((user) => user.id === currUser.id)}: currUser}
    // })
  };

  update = (user) => {
    this.setState({
      currentUser: { id: user.id, name: user.name, email: user.email },
      showForm: !this.state.showForm,
    });
  };
  render() {
    const listUser = this.state.data.map((user) => {
      return (
        <div key={user.id}>
          <Row>{Cards(user)}</Row>
          <Button color="danger" onClick={() => this.DeleteId(user)}>
            Delete
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" onClick={() => this.update(user)}>
            Edit
          </Button>
        </div>
      );
    });
    return (
      <div>
        {listUser}
        {this.state.showForm ? (
          <UpdateUser
            currentUser={this.state.currentUser}
            updateUserFun={this.updateOriginal}
          />
        ) : (
          ""
        )}
        {/* <Button color="primary" onClick={this.update}>
          Edit
        </Button>
        {this.state.showForm ? <UpdateUser /> : ""} */}
      </div>
    );
  }
}

ReactDOM.render(<Users />, document.getElementById("root"));
