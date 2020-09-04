import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import{
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (data) =>{
    return (
        <Card>
            <CardBody>
                <CardTitle key={data.id}>{data.name}</CardTitle>
            </CardBody>
        </Card>
    )
}
export default Cards;