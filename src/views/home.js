import React from 'react';
import { Card } from 'react-bootstrap';
const Home = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>React js Repo Base</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By Christopher Hawk</Card.Subtitle>
        <Card.Text>
          Módulos instalados:
          <br />
          *React Router
          <br />
          *React Bootstrap
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Home;