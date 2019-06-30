import React from 'react';

import { Fade, Card } from 'react-bootstrap';
import GRCLogo from './../../assets/images/Green_River_College_logo.png';

const Education = (props) => {
  return (
    <Fade in appear={true}>
      <Card>
        <Card.Header>
            <img className='d-block mx-auto' src={GRCLogo} alt='Green River college' />
        </Card.Header>
        <Card.Body>
          <h2 className='display-4 text-center text-green'>My Education</h2>
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default Education;