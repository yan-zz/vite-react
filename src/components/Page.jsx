import { useState } from 'react';
import { DropDown } from './DropDown';
import { Window } from './Window';

export const Page = () => {
  const [component, setComponent] = useState('hello');

  const handleValue = (newVal) => {
    setComponent(newVal);
  };

  return (
    <div className="page">
      <DropDown onChange={handleValue} />
      <Window component={component} />
    </div>
  );
};
