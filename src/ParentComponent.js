import React, { useState } from 'react';
import MyContext from './MyContext';
import ChildComponent from './ChildComponent';
import UseCounter from './useCounter'

const ParentComponent = () => {
  const [sharedData, setSharedData] = useState('Data from parent');
  const {count, increment, decrement, reset} = UseCounter(0);

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      <div>
        <h2>Parent Component</h2>
        <p>Shared Data: {sharedData}</p>
        <ChildComponent />
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </MyContext.Provider>
  );
};

export default ParentComponent;
