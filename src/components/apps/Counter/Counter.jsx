import { useState, useEffect } from 'react';
import { CounterButtons } from './CounterButtons';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('greenyellow');

  useEffect(() => {
    color === 'greenyellow'
      ? setColor('orange')
      : setColor('greenyellow');
  }, [count]);

  return (
    <div className="counter">
      <h2 style={{ color: `${color}` }}>{count}</h2>
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
};
