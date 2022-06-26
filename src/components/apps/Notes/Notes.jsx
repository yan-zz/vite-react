import { useState } from 'react';
import { NotesForm } from './NotesForm';
import { NotesList } from './NotesList';

export const Notes = () => {
  const [notes, setNotes] = useState(['first note']);

  return (
    <div className="notes">
      <NotesForm notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
};
