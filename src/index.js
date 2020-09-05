import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Cards from './cards';

import UpdateUser from "./update";

// import DeleteUser from './delete';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

const Cards = (data) => {
  return (
    <Card>
      <Col lg="6">
        <CardBody>
          <CardTitle key={data.id}>Id: {data.id}</CardTitle>
          <CardSubtitle>Name: {data.name}</CardSubtitle>
          <CardText>UserName: {data.username}</CardText>
          <CardText>Email: {data.email}</CardText>
          <CardText>
            Address: {data.address.street}, {data.address.suite},{" "}
            {data.address.city},{data.address.zipcode}, {data.address.geo.lat},{" "}
            {data.address.lng}
          </CardText>
          <CardText>Phone: {data.phone}</CardText>
          <CardText>Website: {data.website}</CardText>
          <CardText>
            {" "}
            Company: {data.company.name}, {data.company.cathPhrase},
            {data.company.bs}
          </CardText>
        </CardBody>
      </Col>
    </Card>
  );
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
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

  DeleteId(user) {
    const data = this.state.data.filter((i) => i.id !== user.id);
    this.setState({ data });
    console.log(this.state.data);
  }
  onFormSubmit() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: formData.name,
        email: FormData.email,
      }),
    });
  }

  update = () =>
    this.setState({
      showForm: !this.state.showForm,
    });

  render() {
    const listItem = this.state.data.map((item) => {
      return (
        <div key={item.id}>
          <Row>{Cards(item)}</Row>
          <Button color="danger" onClick={this.DeleteId.bind(this, item)}>
            Delete
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" onClick={this.update}>
            Update
          </Button>
          {this.state.showForm ? <UpdateUser /> : ""}
        </div>
      );
    });
    return <div>{listItem}</div>;
  }
}

ReactDOM.render(<Users />, document.getElementById("root"));

// render(){
//     const {error, isLoaded, data} = this.state;
//     if(error){
//         return <div>Error: {error.message}</div>
//     }
//     else if (!isLoaded){
//         return <div>Loading...</div>
//     }
//     else{
//         return (
//             <div>
//                 {data.map( (val) => (Cards(val) ) )}
//                 {/* <Button color="danger" onClick={this.DeleteId(data.id)}>Delete</Button> */}
//             </div>
//             // <div>
//             //     {data.map((item) => {
//             //         <Button onClick={this.DeleteId.bind(this, item)}>Delete</Button>
//             //     })}
//             // </div>
//         );
//     }
// }
