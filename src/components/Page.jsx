import { useState } from 'react';
import { DropDown } from './DropDown';
import { Window } from './Window';

export const Page = () => {
  const [component, setComponent] = useState('hello');

  return (
    <div className="page">
      <DropDown setComponent={setComponent} />
      <Window component={component} />
    </div>
  );
};
