import React from 'react';

import { Switch, Route, NavLink as Link } from 'react-router-dom';
import { Fade, Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import NoMatch from './NoMatch';


const Portfolio = (props) => {
  return (
    <Fade in appear={true}>
      <Container className='mt-2'>
        <Card>
          <Card.Header>
            <h2 className='text-primary'>My works over the years...</h2>
          </Card.Header>
          <Card.Body className='p-4'>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
              
              <Row>
                <Col sm={4} lg={3} className='border p-4'>
                  <h4 className='text-primary'>Java</h4>
                  <Nav variant='pills' className='flex-column'>
                    <Link to={props.match.url + '/adventure-game'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Adventure Game
                    </Link>
                    <Link to={props.match.url + '/hunger-games'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Hunger Games
                    </Link>
                    <Link to={props.match.url + '/web-crawler'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Web Crawler
                    </Link>
                    <Link to={props.match.url + '/chat-program'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Chat Program
                    </Link>
                    <Link to={props.match.url + '/assassin-program'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Assassin Program
                    </Link>
                    <Link to={props.match.url + '/name-registry'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Name Registry  
                    </Link>
                    <Link to={props.match.url + '/note-taker'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Note Taker  
                    </Link>
                    <Link to={props.match.url + '/Paint-Program'} className='nav-link'>
                      <span class='mr-2'>{String.fromCharCode('10148')}</span> Paint Program 
                    </Link>
                  </Nav>
                </Col>
                <Col sm={8} lg={9}>
                  <Switch>
                    <Route path={props.match.url + '/adventure-game'} component={NoMatch}/>
                    <Route path={props.match.url + '/hunger-games'} component={NoMatch}/>
                    <Route path={props.match.url + '/:other'} component={NoMatch}/>
                  </Switch>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Container>
    </Fade>
  );
};

export default Portfolio;