import React from 'react';

import { Fade, Container, Row, Col, Card } from 'react-bootstrap';
import SVGIcon from './../components/SVGIcon';
import icons from './../utilities/icons';


const Contact = (props) => {
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
            <Card className='border-0'>
              <Card.Header className='bg-primary text-light'><h2>My Contact Info</h2></Card.Header>
              <Card.Body>
                <p className='lead'>
                  <div>Aaron Melhaff</div>
                  <a href='mailto:aaronnmelhaff@gmail.com' target='_top'>aaronnmelhaff@gmail.com</a>
                  <br />
                  <span>1-253-545-1740</span>
                </p>
                <div className='d-flex'>
                  <a className='btn btn-light btn-lg' href='https://github.com/AaronMelhaff' target='_blank' rel='noopener noreferrer'>
                    <SVGIcon className='button-icon icon-sm' path={icons('github')}/>
                  </a>
                  <a className='btn btn-light btn-lg' href='https://www.linkedin.com/in/aaron-melhaff/' target='_blank' rel='noopener noreferrer'>
                    <SVGIcon className='button-icon icon-sm' path={icons('linkedin')}/>
                  </a>
                  <a className='btn btn-light btn-lg' href='https://twitter.com/AaronNMelhaff' target='_blank' rel='noopener noreferrer'>
                    <SVGIcon className='button-icon icon-sm' path={icons('twitter')}/>
                  </a>
                  <a className='btn btn-light btn-lg' href='https://www.facebook.com/aaron.melhaff' target='_blank' rel='noopener noreferrer'>
                    <SVGIcon className='button-icon icon-sm' path={icons('facebook')}/>
                  </a>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Contact;