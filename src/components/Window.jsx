import { useState, useEffect } from 'react';
import { Hello } from './apps/Hello';
import { Counter } from './apps/Counter';
import { Notes } from './apps/Notes';

export const Window = ({ component }) => {
  const [window, setWindow] = useState(<Hello />);

  useEffect(() => {
    {
      component === 'hello' && setWindow(<Hello />);
    }
    {
      component === 'counter' && setWindow(<Counter />);
    }
    {
      component === 'notes' && setWindow(<Notes />);
    }
  }, [component]);

  return <div className="window">{window}</div>;
};
