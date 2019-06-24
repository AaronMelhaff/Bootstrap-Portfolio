import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SVGIcon from './../components/SVGIcon';
import icons from '../utilities/icons';

export default function SiteNav(props) {

  return (
    <Navbar collapseOnSelect  bg='primary' variant="dark" expand='lg'>
        <Navbar.Toggle aria-controls='site-nav'/>
        <Navbar.Collapse id='site-nav'>
            <Nav className='w-356px'>
              <Link to='/' exact className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>About</span>
                  <SVGIcon className='button-icon icon-sm' path={icons('about')}/>
              </Link>
              <Link to='/portfolio' className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>Portfolio</span>
                  <SVGIcon className='button-icon icon-sm' path={icons('portfolio')}/>
              </Link>
              <Link to='/contact' className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>Contact</span>
                  <SVGIcon className='button-icon icon-sm' path={icons('contact')}/>
              </Link>
            </Nav>
            <hr className='d-lg-none border'/>
            <div className='d-flex justify-content-center justify-content-lg-end w-100' rel='noopener noreferrer'>
              {/* <a className='btn btn-primary' href='https://www.facebook.com/aaron.melhaff' target='_blank' rel='noopener noreferrer'>
                <SVGIcon className='button-icon icon-sm' path={icons('facebook')}/>
              </a> */}

              <a className='btn btn-primary' href='https://github.com/AaronMelhaff' target='_blank' rel='noopener noreferrer'>
                <SVGIcon className='button-icon icon-sm' path={icons('github')}/>
              </a>

              <a className='btn btn-primary' href='https://www.linkedin.com/in/aaron-melhaff/' target='_blank' rel='noopener noreferrer'>
                <SVGIcon className='button-icon icon-sm' path={icons('linkedin')}/>
              </a>
            </div>
        </Navbar.Collapse>
      </Navbar>
  );
}

