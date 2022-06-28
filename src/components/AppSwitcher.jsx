export const AppSwitcher = (props) => {
  const { setComponent } = props;

  return (
    <div className="app-switcher">
      <button onClick={() => setComponent('hello')}>Hello</button>
      <button onClick={() => setComponent('counter')}>
        Counter
      </button>
      <button onClick={() => setComponent('notes')}>Notes</button>
      <button onClick={() => setComponent('calculator')}>
        Calculator
      </button>
    </div>
  );
};
