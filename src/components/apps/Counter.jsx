import { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('greenyellow');

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    {
      color === 'greenyellow' && setColor('orange');
    }
    {
      color === 'orange' && setColor('greenyellow');
    }
  }, [count]);

  return (
    <div className="counter">
      <h2 style={{ color: `${color}` }}>{count}</h2>
      <div className="counter-buttons">
        <button onClick={increment} children="Increment" />
        <button onClick={decrement} children="Decrement" />
      </div>
    </div>
  );
};
