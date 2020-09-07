import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
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
export default Cards;
