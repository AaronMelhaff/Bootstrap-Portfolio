import React from 'react';

import { Fade, Container, Row, Col, Alert } from 'react-bootstrap';


const NoMatch = (props) => {
  return (
    <Fade in appear={true}>
      <Container className='mt-4'>
        <Row>
          <Col 
            xs={{span: 12, offset: 0}}
            sm={{span: 10, offset: 1}}
            md={{span: 8,  offset: 2}}
            lg={{span: 6,  offset: 3}}
            >
            <Alert variant='danger'>
              <Alert.Heading>404</Alert.Heading>
              <p>The page you are looking for does not exist!</p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default NoMatch;