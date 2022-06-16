import { useState, useEffect } from 'react';
import { Hello } from './apps/Hello';
import { Counter } from './apps/Counter';
import { Notes } from './apps/Notes';
import { Calculator } from './apps/Calculator';

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
    {
      component === 'calculator' && setWindow(<Calculator />);
    }
  }, [component]);

  return <div className="window">{window}</div>;
};
