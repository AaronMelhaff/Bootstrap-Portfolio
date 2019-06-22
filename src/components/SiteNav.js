import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// Nav Button Icons
import AboutIcon from './../assets/images/icons/account-card-details.svg';
import PortfolioIcon from './../assets/images/icons/folder-open.svg';
import ContactIcon from './../assets/images/icons/ic_email_48px.svg';

// Social Media Icons
import FacebookIcon from './../assets/images/icons/facebook.svg';
import GithubIcon from './../assets/images/icons/github-circle.svg';
import LinkedIn from './../assets/images/icons/linkedin.svg';

export default function SiteNav(props) {

  return (
    <Navbar collapseOnSelect  bg='primary' variant="dark" expand='lg'>
        <Navbar.Toggle aria-controls='site-nav'/>
        <Navbar.Collapse id='site-nav'>
            <Nav className='w-356px'>
              <Link to='/' exact className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>About</span>
                  <img className='icon-sm' src={ AboutIcon } alt='-' />
              </Link>
              <Link to='/projects' className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>Portfolio</span>
                  <img className='icon-sm' src={ PortfolioIcon } alt='-' />
              </Link>
              <Link to='/contact' className='btn btn-primary d-block nav-btn'>
                  <span className='mr-1'>Contact</span>
                  <img className='icon-sm' src={ ContactIcon } alt='-' />
              </Link>
            </Nav>
            <div className='d-flex justify-content-center justify-content-lg-end w-100' rel='noopener noreferrer'>
              <Link className='btn btn-primary' to='https://www.facebook.com/aaron.melhaff' target='_blank' rel='noopener noreferrer'>
                  <img className='' src={ FacebookIcon } alt='Facebook' />
              </Link>

              <Link className='btn btn-primary' to='https://github.com/AaronMelhaff' target='_blank' rel='noopener noreferrer'>
                  <img className='' src={ GithubIcon } alt='Github' />
              </Link>

              <Link className='btn btn-primary' to='https://www.linkedin.com/in/aaron-melhaff/' target='_blank' rel='noopener noreferrer'>
                  <img className='' src={ LinkedIn } alt='LinkedIn' />
              </Link>
            </div>
        </Navbar.Collapse>
      </Navbar>
  );
}

