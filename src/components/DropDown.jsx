export const DropDown = ({ onChange }) => {
  const handleValue = (ev) => {
    const newVal = onChange(ev.currentTarget.value);
    return newVal;
  };

  return (
    <div className="dropdown">
      <select onChange={handleValue}>
        <option value="hello">Hello</option>
        <option value="counter">Counter</option>
        <option value="notes">Notes</option>
        <option value="calculator">Calculator</option>
      </select>
    </div>
  );
};
