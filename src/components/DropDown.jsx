export const DropDown = (props) => {
  const { setComponent } = props;

  const handleValue = (e) => {
    setComponent(e.target.value);
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
