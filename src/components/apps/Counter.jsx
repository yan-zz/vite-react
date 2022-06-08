import { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const colorSwitcher = () => {
    let el = document.getElementById('text');
    el?.style.color === 'greenyellow'
      ? el?.setAttribute('style', 'color: orange')
      : el?.setAttribute('style', 'color: greenyellow');
  };

  useEffect(() => {
    colorSwitcher();
  }, [count]);

  return (
    <div className="counter">
      <h2 id="text" style={{ color: 'white' }}>
        {count}
      </h2>
      <div className="counter-buttons">
        <button onClick={increment} children="Increment" />
        <button onClick={decrement} children="Decrement" />
      </div>
    </div>
  );
};
