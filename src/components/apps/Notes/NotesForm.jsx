import { useState } from 'react';

export const NotesForm = ({ notes, setNotes }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const inputEvent = e.target.value;
    setInputValue(inputEvent);
  };

  const addNote = (e) => {
    e.preventDefault();
    inputValue.trim() !== '' && setNotes([inputValue, ...notes]);
    setInputValue('');
  };

  return (
    <form onSubmit={(e) => addNote(e)}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button children="add" />
    </form>
  );
};
