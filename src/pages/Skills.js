import React from 'react';

import { Fade, Card } from 'react-bootstrap';
import SVGIcon from './../components/SVGIcon';
import icons from './../utilities/icons';

const Skills = (props) => {
  return (
    <Fade in appear={true}>
      <Card>
        <Card.Header>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#9b1d20' path={icons('java')} />
            <h1 className='display-4 ml-3 mb-0'>Java</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo bg-dark' fill='#ffa400' path={icons('javascript')} />
            <h1 className='display-4 ml-3 mb-0'>JavaScript</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#3b5177' path={icons('php')} />
            <h1 className='display-4 ml-3 mb-0'>PHP</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#f26419' path={icons('html')} />
            <h1 className='display-4 ml-3 mb-0'>HTML5</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#1e92ff' path={icons('css')} />
            <h1 className='display-4 ml-3 mb-0'>CSS</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#6d486d' path={icons('bootstrap')} />
            <h1 className='display-4 ml-3 mb-0'>Boostrap</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#679436' path={icons('nodejs')} />
            <h1 className='display-4 ml-3 mb-0'>Node.js</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#1e92ff' path={icons('webpack')} />
            <h1 className='display-4 ml-3 mb-0'>Webpack</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#1e92ff' path={icons('jquery')} />
            <h1 className='display-4 ml-3 mb-0'>jQuery</h1>
          </div>
          <div className='d-flex'>
            <SVGIcon className='logo' fill='#61dafb' path={icons('react')} />
            <h1 className='display-4 ml-3 mb-0'>React.js</h1>
          </div>
        </Card.Header>
      </Card>
    </Fade>
  );
};

export default Skills;