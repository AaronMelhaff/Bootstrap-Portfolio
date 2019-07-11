import React from 'react';

import { Fade, Card, Row, Col } from 'react-bootstrap';

import skillList from './../../utilities/skill-list';

import SVGIcon from './../../components/SVGIcon';
import icons from './../../utilities/icons';

const Skill = (props) => {
  return (
    <Col xs={4} sm={3} lg={2} xl={2}>
      <div className='skill-display m-2 m-sm-1 m-md-2 m-lg-3 m-lg-4 rounded py-3'>
        <SVGIcon className='logo d-block mx-auto' stroke={props.stroke} fill={props.fill} path={icons(props.icon)} />
        <h1 className='lead text-center'>{props.title}</h1>
      </div>
    </Col>
  );
}

const Category = (props) => {
  return (
    <div className='mb-4'>
      <h1 className='text-primary mb-2'>{props.title}</h1>
      <Row>
        {props.list.map((skill, index) => <Skill key={index} {...skill} />)}
      </Row>
    </div>
  );
}

const Skills = (props) => {
  return (
    <Fade in appear={true}>
      <Card>
        <Card.Body>
          {skillList.categories.map((category, index) => 
            <Category {...category} key={index}/>
          )}
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default Skills;