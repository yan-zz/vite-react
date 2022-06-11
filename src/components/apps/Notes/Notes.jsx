import { useState, useEffect } from 'react';

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await fetch('/notes');
    const json = await res.json();
    setNotes(json);
  };

  useEffect(() => {
    getNotes();
  }, [notes]);

  return (
    <div className="notes">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
};
