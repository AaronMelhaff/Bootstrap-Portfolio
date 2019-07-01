import React from 'react';

import { Link } from 'react-router-dom';
import { Fade, Card, Row, Col, Figure } from 'react-bootstrap';
import icons from './../utilities/icons';
import SVGIcon from './../components/SVGIcon';

const ProjectShowCase = (props) => {
  if(props.project !== undefined) {
    const {title, date, tags, images, desc, repository} = props.project;
    const returnIcon = String.fromCharCode(10094);

    // Preserve any search tags when returning from project page.
    const returnURLParams = new URLSearchParams(window.location.search);
    returnURLParams.delete('project');

    const imageComponents = (images !== undefined) ? images.map((image, index) => 
      <Col sm={12} md={6} lg={4}>
        <Figure className='p-2'>
          <Figure.Image
            className='project-image'
            alt={image.caption}
            src={image.src}
          />
          <Figure.Caption>
            {image.caption}
          </Figure.Caption>
        </Figure>
      </Col>
    ) : '';
  
    return (
      <Fade in appear={true}>
        <Card className='border-0'>
          <Card.Header className='bg-primary text-light'>
            <div className='d-flex'>
              <Link to={props.returnURL + '?' + returnURLParams.toString()} 
                className='text-light text-decoration-none mr-4'
              >
                <h2>{ returnIcon }</h2>
              </Link>
              <div>
                <h2>{title}</h2>
                <div className='d-flex flex-wrap'>
                  {tags.map((tag, index) => <span key={index} className='mr-2'>{tag}</span>)}
                </div>
              </div> 
              <span className='ml-auto pt-2 text-nowrap'>{date}</span>
              <a className='text-light mt-1 ml-2' href={repository} target='_blank' rel='noopener noreferrer'>
                <SVGIcon className='button-icon' path={icons('github')}/>
              </a>
            </div>
            
          </Card.Header>
          <Card.Body>
            <Row>
              {imageComponents}
            </Row>
            <p className='lead'>
              {desc}
            </p>
          </Card.Body>
        </Card>
      </Fade>
    );
  } else {
    return (
      <div></div>
    );
  }
  
};

export default ProjectShowCase;