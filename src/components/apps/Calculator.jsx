import { useState } from 'react';

export const Calculator = () => {
  const [output, setOutput] = useState('0');
  const numbers = [
    'AC',
    '<',
    '/',
    '9',
    '8',
    '7',
    '*',
    '6',
    '5',
    '4',
    '-',
    '3',
    '2',
    '1',
    '+',
    '.',
    '0',
    '=',
  ];

  const handleClick = (value) => {
    if (value === 'AC') setOutput('0');
    else if (value === '<') {
      output.slice(0, -1) === ''
        ? setOutput('0')
        : setOutput(output.slice(0, -1));
    } else if (value === '=') setOutput(eval(output));
    else
      output === '0'
        ? setOutput('' + value)
        : setOutput(output + value);
  };

  return (
    <div className="calculator">
      <div className="output">{output}</div>
      <div className="numbers">
        {numbers.map((number) => (
          <button
            key={number + 'w'}
            value={number}
            onClick={(e) => handleClick(e.target.value)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
