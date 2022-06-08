import { useState } from 'react';
import { DropDown } from './DropDown';
import { Window } from './Window';

export const Box = () => {
  const [component, setComponent] = useState('hello');

  const handleValue = (newVal) => {
    setComponent(newVal);
  };

  return (
    <div className="box">
      <DropDown onChange={handleValue} />
      <Window component={component} />
    </div>
  );
};
