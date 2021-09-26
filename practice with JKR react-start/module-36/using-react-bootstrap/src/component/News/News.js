import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
  // console.log(props);
    const {title, description} = props.article;
    return (
        <div>
            <Card>
  <Card.Header>{title}</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>{description}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default News;