export const CounterButtons = (props) => {
  const { count, setCount } = props;

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-buttons">
      <button onClick={decrement} children="Decrement" />
      <button onClick={increment} children="Increment" />
    </div>
  );
};
