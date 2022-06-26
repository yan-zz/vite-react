export const CalculatorButtons = ({ output, setOutput }) => {
  const numbers = [
    'AC',
    '<',
    '%',
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
    else if (value === '%') setOutput(output / 100);
    else
      output === '0'
        ? setOutput('' + value)
        : setOutput(output + value);
  };

  return (
    <div className="numbers">
      {numbers.map((number, i) => (
        <button
          key={i}
          value={number}
          onClick={(e) => handleClick(e.target.value)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
