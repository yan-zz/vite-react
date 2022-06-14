import { useState, useEffect } from 'react';

export const Notes = () => {
  const [notes, setNotes] = useState(['first']);

  const handleClick = () => {
    event.preventDefault();
    setNotes([...notes, document.getElementById('input').value]);
  };

  const list = notes.map((note) => {
    return <li key={note}>{note}</li>;
  });

  useEffect(() => {
    list;
  }, [notes]);

  return (
    <div className="notes">
      <form>
        <input type="text" id="input" />
        <button onClick={() => handleClick()} children="add" />
      </form>
      <ul>{list}</ul>
    </div>
  );
};
