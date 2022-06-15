import { useState, useEffect } from 'react';

export const Hello = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(setDate(new Date()), 1000);
  }, [date]);

  return (
    <div className="hello">
      <h1>{date.toLocaleTimeString()}</h1>
      <h3>{date.toDateString()}</h3>
    </div>
  );
};
