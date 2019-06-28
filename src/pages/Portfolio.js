import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Fade, Container, Row, Col, Card, Tab, Button, Navbar, Nav } from 'react-bootstrap';
import NoMatch from './NoMatch';
import projects from './../utilities/projects';


const Portfolio = (props) => {

  // Grab all tags from existing projects.
  const tags = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  });

  // Create interactive buttons for each existing tag.
  const tagButtons = Array.from(tags).map((tag, index) => 
    <Button key={index} 
      size='sm' 
      variant='link'
      onClick={tagClickHandler}
    >
      {tag}
    </Button>
  );

  // Pull selected tags from URL.
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTags = new Set(urlParams.getAll('search'));

  // Create badges to display all of the selected tags.
  const selectedTagBadges = Array.from(selectedTags).map((tag, index) => 
    <Nav.Item key={index}>
      <Button size='sm' 
        className='rounded m-1' 
        variant='primary'
        onClick={badgeClickHandler}
      >
        {tag}
      </Button>
    </Nav.Item>
  );

  // Find all projects that match the selected tags.
  const matchingProjects = (selectedTags.size > 0) ? 
    projects.filter(project => {
      project.tags.forEach(tag => {
        if(selectedTags.has(tag) === true) return true;
      });
      return false;
    }) : projects;

  // Create links for each of the projects that match the selected tags.
  const projectLinks = (matchingProjects.length > 0) ? matchingProjects.map((project, index) => 
    <Button key={index} className='btn btn-primary' to={props.match.url + project.url}>{project.title}</Button>
  ) : <h4 className='text-muted text-center p-4'>No matches found.</h4>;

  // Create routes for all projects.
  const projectRoutes = projects.map((project, index) => 
    <Route key={index} path={props.match.url + project.url} component={project.component}/>
  );

  function tagClickHandler(event) {
    const targetTag = event.target.innerText;

    // If tag is already selected, do nothing.
    if(!selectedTags.has(targetTag)) {

      // Add tag to query string.
      urlParams.append('search', targetTag);
      props.history.push(props.match.url + '?' + urlParams.toString(), {});
    }
  }

  function badgeClickHandler(event) {
    const targetTag = event.target.innerText;
  
    // If tag is already selected, do nothing.
    if(selectedTags.has(targetTag)) {

      const newSelectedTags = Array.from(selectedTags).filter(tag => 
        tag !== targetTag
      );
      if(newSelectedTags.length > 0) {
        const queryString = `?search=${newSelectedTags.join('&search=')}`;
        props.history.push(props.match.url + queryString, {});
      } else {
        props.history.push(props.match.url, {});
      }
    }
  }

  return (
    <Fade in appear={true}>
      <Container className='mt-2'>
        <Card className='border-0'>
          <Card.Header className='bg-secondary text-light'>
            <h2>Stuff I made</h2>
          </Card.Header>
          <Card.Body className='p-0'>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
              <Row>
                <Col sm={5} md={4} lg={3}>
                  <Card>
                    <Card.Header className='text-primary'>
                      <h4 className='m-0'>Tags</h4>
                    </Card.Header>
                    <Card.Body className='pt-0'>
                      { tagButtons }
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} md={8} lg={9}>
                  <Navbar className='bg-light border-bottom p-2'>
                    <Nav>
                      {selectedTagBadges}
                    </Nav>
                  </Navbar>
                  
                  {projectLinks}
                  <Switch>
                    { projectRoutes }
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