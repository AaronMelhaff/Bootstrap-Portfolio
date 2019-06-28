import React from 'react';

import { Fade, Container, Row, Col, Card } from 'react-bootstrap';


const Pallete = (props) => {
  return (
    <Fade in appear={true}>
      <Container className='mt-2'>
        <Row>
          <Col 
            xs={{span: 12, offset: 0}}
            sm={{span: 10, offset: 1}}
            md={{span: 8,  offset: 2}}
            lg={{span: 6,  offset: 3}}
            >
              <Card>
                <Card.Body>
                  
                  <p className='text-primary'>Primary</p>
                  <p className='bg-primary text-light'>Primary</p>
                  <p className='text-secondary'>Secondary</p>
                  <p className='bg-secondary text-light'>Secondary</p>
                  <p className='text-info'>info</p>
                  <p className='bg-info text-light'>info</p>
                  <p className='text-success'>success</p>
                  <p className='bg-success text-light'>success</p>
                  <p className='text-warning'>warning</p>
                  <p className='bg-warning text-light'>warning</p>
                  <p className='text-danger'>danger</p>
                  <p className='bg-danger text-light'>danger</p>
                  <p className='text-green'>green</p>
                  <p className='bg-green text-light'>green</p>
                  <p className='text-orange'>orange</p>
                  <p className='bg-orange text-light'>orange</p>
                  <p className='text-tertiary'>tertiary</p>
                  <p className='bg-tertiary text-light'>tertiary</p>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Pallete;