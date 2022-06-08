import { Hello } from './apps/Hello';
import { Counter } from './apps/Counter';
import { Notes } from './apps/Notes';

export const Window = ({ component }) => {
  return (
    <div className="window">
      {component === 'hello' && <Hello />}
      {component === 'counter' && <Counter />}
      {component === 'notes' && <Notes />}
    </div>
  );
};
