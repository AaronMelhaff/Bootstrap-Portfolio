import React from 'react';

import { Fade, Container, Row, Col, Card } from 'react-bootstrap';
import PortraitImage from './../assets/images/portrait.jpg';

const NoMatch = (props) => {
  return (
    <Fade in appear={true}>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header><h2>Aaron Melhaff</h2></Card.Header>
              <Card.Body className='justify-content-center'>
                <Card.Img className='portrait' src={PortraitImage} alt=' ' />
                <Card.Title className='text-center text-primary'>
                  <h1>About Me</h1>
                </Card.Title>
                <Card.Text>
                  I am a recently graduated software developer seeking opportunities to learn new technologies and create
                  positive user experiences. During my time at school, I have learned different agile methods for boosting 
                  productivity and communication. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default NoMatch;