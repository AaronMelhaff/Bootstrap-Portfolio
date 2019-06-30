import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { Fade, Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from './../utilities/projects';
import StackPane from '../components/StackPane';


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
  const selectedTags = new Set(urlParams.getAll('tags'));
  const selectedProject = projects.find(project => project.url === urlParams.get('project'));

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
          to={props.match.url + `?project=${project.url}${appliedFilterTags}`}
        >
          {project.title} - {project.date}
        </Link>
      </div>
    );
  }) : <h4 className='text-muted text-center p-4'>No matches found!</h4>;

  // Generate displayed project or dummy if no project is active.
  const ProjectComponent = (selectedProject !== undefined) ? selectedProject.component : (props) => <div></div>;

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
              <h2 className='mb-0'>Stuff I made</h2>
            </Card.Header>
            <Card.Body className='p-0'>
              <Row className='bg-info'>
                <Col sm={5} md={4} lg={3} className='p-2'>
                  <h3 className='text-secondary mb-0 ml-2'>Tags</h3>
                </Col>
                <Col sm={6} md={8} lg={9}>
                  <div className='d-flex flex-wrap py-2'>
                    {selectedTagBadges}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={5} md={4} lg={3} className='border-right p-2'>
                  { tagButtons }
                </Col>
                <Col sm={6} md={8} lg={9}>
                  <div className='p-2'>
                    {projectLinks}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <ProjectComponent />
        </StackPane>
      </Container>
    </Fade>
  );
};

export default Portfolio;