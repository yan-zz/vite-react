import { useState } from 'react';

export const Hello = () => {
  const [date, setDate] = useState(new Date());

  setTimeout(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="hello">
      <h1>{date.toLocaleTimeString()}</h1>
      <h3>{date.toDateString()}</h3>
    </div>
  );
};
