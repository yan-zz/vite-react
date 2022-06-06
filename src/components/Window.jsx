import { Hello } from './Hello';
import { Counter } from './Counter';

export const Window = ({ component }) => {
  return (
    <div className="window">
      {component === 'hello' && <Hello />}
      {component === 'counter' && <Counter />}
    </div>
  );
};
