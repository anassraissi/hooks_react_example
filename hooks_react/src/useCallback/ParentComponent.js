import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback is used to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array because the function doesn't depend on any external values

  console.log('ParentComponent rendered');
  
  return (
    <div>
      <p>Count: {count}</p>
      {/* ChildComponent receives the memoized increment function */}
      <ChildComponent increment={increment} />
    </div>
  );
};

export default ParentComponent;
