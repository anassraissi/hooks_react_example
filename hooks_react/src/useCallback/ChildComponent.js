import React from 'react';

const ChildComponent = ({ increment }) => {
  console.log('ChildComponent rendered');

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};

export default ChildComponent;
