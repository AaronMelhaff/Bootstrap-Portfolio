import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { Fade, Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from './../utilities/projects';
import StackPane from '../components/StackPane';
import ProjectShowCase from '../components/ProjectShowCase';


const Portfolio = (props) => {

  // Pull selected tags from URL.
  const urlParams = new URLSearchParams(props.location.search);
  const selectedTags = new Set(urlParams.getAll('tags'));
  const selectedProject = projects.find(project => project.id === urlParams.get('project'));
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

  // Create badges to display all of the selected tags.
  const selectedTagBadges = Array.from(selectedTags).map((tag, index) => 
    <Button key={index} size='sm' 
      className='rounded ml-2 mt-1' 
      variant='secondary'
      onClick={badgeClickHandler}
    >
      {tag}
    </Button>
  );

  // Find all projects that match the selected tags.
  const matchingProjects = (selectedTags.size > 0) ? 
    projects.filter(project => {
      // Find all selected tags that match projects.
      const searchResults = Array.from(selectedTags).filter(tag =>
        project.tags.includes(tag)
      );

      // Ensure all selected tags were found.
      return (searchResults.length === selectedTags.size);
    }) : projects; // If there are no tags selected, show all projects.

  // Create links for each of the projects that match the selected tags.
  const projectLinks = (matchingProjects.length > 0) ? matchingProjects.map((project, index) => {
    const appliedFilterTags = (selectedTags.size > 0) ? `&${urlParams.toString()}` : '';

    return (
      <div key={index}>
        <Link 
          className='btn btn-link' 
          to={props.match.url + `?project=${project.id}${appliedFilterTags}`}
        >
          {project.title} - {project.date}
        </Link>
      </div>
    );
  }) : <h4 className='text-muted text-center p-4'>No matches found!</h4>;

  function tagClickHandler(event) {
    const targetTag = event.target.innerText;

    // If tag is already selected, do nothing.
    if(!selectedTags.has(targetTag)) {

      // Add tag to query string.
      urlParams.append('tags', targetTag);
      props.history.push(props.match.url + '?' + urlParams.toString(), {});
    }
  }

  function badgeClickHandler(event) {
    const targetTag = event.target.innerText;
  
    // If tag is already selected, do nothing.
    if(selectedTags.has(targetTag)) {
      // Otherwise, remove selected badge tag.
      const newSelectedTags = Array.from(selectedTags).filter(tag => 
        tag !== targetTag
      );
      
      if(newSelectedTags.length > 0) {
        const queryString = `?tags=${newSelectedTags.join('&tags=')}`;
        props.history.push(props.match.url + queryString, {});
      } else {
        props.history.push(props.match.url, {});
      }
    }
  }

  return (
    <Fade in appear={true}>
      <Container className='mt-2'>
        <StackPane>
          <Card className='border-0'>
            <Card.Header className='bg-secondary text-light'>
              <h2>Stuff I made</h2>
            </Card.Header>
            <Card.Body className='p-0'>
              <Row className='bg-secondary-light'>
                <Col md={4} lg={3} className='p-2'>
                  <h3 className='text-secondary ml-2'>Tags</h3>
                </Col>
                <Col md={8} lg={9}>
                  <div className='d-flex flex-wrap py-2'>
                    {selectedTagBadges}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} className='border-right border-bottom p-2'>
                  { tagButtons }
                </Col>
                <Col md={8} lg={9}>
                  <div className='p-2'>
                    {projectLinks}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <ProjectShowCase project={selectedProject} returnURL={'/portfolio'}/> 
        </StackPane>
      </Container>
    </Fade>
  );
};

export default Portfolio;