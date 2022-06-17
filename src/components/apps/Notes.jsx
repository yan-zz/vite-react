import { useState, useEffect } from 'react';

export const Notes = () => {
  const [notes, setNotes] = useState(['first']);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    event.preventDefault();
    setNotes([...notes, inputValue]);
  };

  const handleChange = (event) => {
    const inputEvent = event.target.value;
    setInputValue(inputEvent);
  };

  const remove = (event) => {
    event.preventDefault();
    const toRemove = parseInt(event.target.name, 10);
    const copyNotes = notes;
    copyNotes.splice(toRemove, 1);
    setNotes([...copyNotes]);
  };

  const list = notes.map((note, i) => {
    return (
      <li key={i}>
        <button
          name={i}
          onClick={(event) => remove(event)}
          children={'x'}
        />
        {note}
      </li>
    );
  });

  useEffect(() => {
    list;
  }, [notes]);

  return (
    <div className="notes">
      <form>
        <input type="text" onChange={handleChange} />
        <button onClick={() => handleClick()} children="add" />
      </form>
      <ul>{list}</ul>
    </div>
  );
};
