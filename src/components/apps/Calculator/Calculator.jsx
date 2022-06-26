import { useState } from 'react';
import { CalculatorButtons } from './CalculatorButtons';

export const Calculator = () => {
  const [output, setOutput] = useState('0');

  return (
    <div className="calculator">
      <h1 className="output">{output}</h1>
      <CalculatorButtons output={output} setOutput={setOutput} />
    </div>
  );
};
