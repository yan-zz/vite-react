import { useState, useEffect } from 'react';
import Button from './Button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const colorSwitcher = () => {
    let el = document.getElementById('p');
    el?.style.color === 'greenyellow'
      ? el?.setAttribute('style', 'color: orange')
      : el?.setAttribute('style', 'color: greenyellow');
  };

  useEffect(() => {
    colorSwitcher();
  }, [count]);

  return (
    <div className="counter">
      <Button onClick={increment} children="Increment" />
      <Button onClick={decrement} children="Decrement" />
      <p id="p" style={{ color: 'white' }}>
        {count}
      </p>
    </div>
  );
};
