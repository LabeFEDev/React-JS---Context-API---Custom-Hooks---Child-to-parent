import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildComponent = () => {
  const { sharedData, setSharedData } = useContext(MyContext);

  const handleChange = (event) => {
    setSharedData(event.target.value);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Data in Child: {sharedData}</p>
      <input type="text" value={sharedData} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;
