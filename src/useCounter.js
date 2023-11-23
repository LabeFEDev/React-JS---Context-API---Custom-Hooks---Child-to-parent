import { useState } from 'react';

const UseCounter = (initialVal=0) => {
  const [count, setCount] = useState(initialVal);

  const increment = () => {
    setCount(count+1);
  }
  const decrement = () => {
    setCount(count-1);
  }
  const reset = () => {
    setCount(initialVal);
  }
  return {
    increment,
    decrement,
    reset,
    count
  }

}
export default UseCounter;