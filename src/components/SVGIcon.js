import React from 'react';

const SVGIcon = (props) => {
  return (
    <svg className={props.className} viewBox="0 0 24 24">
      <path stroke-width="0.2" stroke={props.stroke} fill={props.fill} d={props.path} /> 
    </svg>
  );
};

export default SVGIcon;