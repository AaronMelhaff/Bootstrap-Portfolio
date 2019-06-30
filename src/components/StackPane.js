import React from 'react';

const StackPane = (props) => {
  const childWrappers = props.children.map(child => 
    <div className='stack-pane-child'>
      {child}
    </div>
  );

  return (
    <div className='stack-pane'>
      {childWrappers}
    </div>
  );
};

export default StackPane;