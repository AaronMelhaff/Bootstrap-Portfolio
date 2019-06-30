import React from 'react';

const StackPane = (props) => {

  let childWrappers = undefined;
  if(props.children.length > 0) {
    childWrappers = props.children.map((child, index) => 
      <div key={index} className='stack-pane-child'>
        {child}
      </div>
    );
  } else if (props.children !== undefined) {
    childWrappers = <div className='stack-pane-child'>{props.children}</div>;
  }

  return (
    <div className='stack-pane'>
      {childWrappers}
    </div>
  );
};

export default StackPane;