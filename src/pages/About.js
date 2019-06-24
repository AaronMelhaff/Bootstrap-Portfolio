import React from 'react';

import { Route, NavLink } from 'react-router-dom';
import { Fade, Container, Row, Col, Card } from 'react-bootstrap';
import PortraitImage from './../assets/images/portrait.jpg';
import Skills from './Skills';
import Education from './Education';
import SVGIcon from '../components/SVGIcon';
import icons from '../utilities/icons';

const NoMatch = (props) => {
  return (
    <Fade in appear={true}>
      <Container className='mt-2'>
        <Row>
          <Col>
            <Card>
              <Card.Header><h2>Aaron Melhaff</h2></Card.Header>
              <Card.Body className='justify-content-center'>
                <Card.Img className='portrait' src={PortraitImage} alt=' ' />
                <Card.Title className='text-center text-primary'>
                  <h1 className='display-4'>About Me</h1>
                </Card.Title>
                <Card.Text>
                  I am a recently graduated software developer seeking opportunities to learn new technologies and create
                  positive user experiences. During my time at school, I have learned different agile methods for boosting 
                  productivity and communication. 
                </Card.Text>
                <NavLink to={props.match.url + '/skills'} className='btn btn-tertiary d-inline-flex'>
                  <SVGIcon className='button-icon mr-2' path={icons('skills')} />
                  <h4 className='m-0'>Skills</h4>
                </NavLink>
                <NavLink to={props.match.url + '/education'} className='btn btn-tertiary d-inline-flex'>
                  <SVGIcon className='button-icon mr-2' path={icons('education')} />
                  <h4 className='m-0'>Education</h4>
                </NavLink>
                <Route path={props.match.url + '/education'} component={Education}/>
                <Route path={props.match.url + '/skills'} component={Skills}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default NoMatch;