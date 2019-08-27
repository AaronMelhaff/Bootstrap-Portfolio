import React from 'react';

import { Fade, Card, Image, Row, Col } from 'react-bootstrap';
import GRCLogo from './../../assets/images/Green_River_College_logo.png';

const Education = (props) => {
  return (
    <Fade in appear={true}>
      <Card>
        <Card.Header>
            <Image className='d-block mx-auto' fluid src={GRCLogo} alt='Green River college' />
        </Card.Header>
        <Card.Body>
          <h2 className='display-4 text-center text-green'>My Education</h2>
          
          <div className='p-4 lead'>
            I completed my Bachelors Degree in Software Development at Green River College in 2019. 
            While at GRC, I recieved hands on training from industry professionals.
            My instructors used their past experience in the field to teach us about relevant 
            subjects like clean code, agile methodologies, and collaborating with other developers.
          </div>

          <div className='p-4'>
            <Row>
              <Col xs={12} md={{span: 11, offset: 1}} xl={{span: 10, offset: 2}} >
                <h3 className='text-green'>Relevant Courses:</h3>
              </Col>
              <Col md={{span: 5, offset: 1}} xl={{span: 4, offset: 2}}>
                <ul className='m-0 lead'>
                  <li>Java Programming</li>
                  <li>Systems Programming</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Design Patterns</li>
                  <li>Software Maintenance</li>
                </ul>
              </Col>
              <Col md={{span: 5, offset: 1}} xl={{span: 4, offset: 1}}>
                <ul className='m-0 lead'>
                  <li>Front End Web-Development</li>
                  <li>Back End Web-Development</li>
                  <li>Full Stack Web-Development</li>
                  <li>Database Fundementals</li>
                  <li>Agile Methodologies</li>
                </ul>
              </Col>
            </Row>
          </div>
          
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default Education;