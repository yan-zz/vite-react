import { useEffect } from 'react';

export const NotesList = ({ notes, setNotes }) => {
  const remove = (e) => {
    e.preventDefault();
    const toRemove = parseInt(e.target.name, 10);
    const copyNotes = notes;
    copyNotes.splice(toRemove, 1);
    setNotes([...copyNotes]);
  };

  const list = notes.map((note, i) => {
    return (
      <li key={i}>
        {note}
        <button name={i} onClick={(e) => remove(e)} children={'x'} />
      </li>
    );
  });

  useEffect(() => {
    list;
  }, [notes]);

  return <ul>{list}</ul>;
};
