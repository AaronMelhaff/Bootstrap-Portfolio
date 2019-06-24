import React from 'react';

import { Fade, Card } from 'react-bootstrap';
import SVGIcon from './../components/SVGIcon';
import icons from './../utilities/icons';
import GRCLogo from './../assets/images/Green_River_College_logo.png';

const Education = (props) => {
  return (
    <Fade in appear={true}>
      <Card>
        <Card.Header>
          <div>
            <img className='d-block mx-auto' src={GRCLogo} alt='Green River college' />
          </div>
        </Card.Header>
      </Card>
    </Fade>
  );
};

export default Education;