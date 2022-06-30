import { useState } from 'react';
import { AppSwitcher } from './AppSwitcher';
import { Window } from './Window';

export const Page = () => {
  const [component, setComponent] = useState('hello');

  return (
    <div className="page">
      <AppSwitcher setComponent={setComponent} />
      <Window component={component} />
      <AppSwitcher setComponent={setComponent} />
    </div>
  );
};
