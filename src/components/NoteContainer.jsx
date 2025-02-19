import NoteCard from "./NoteCard";
import { useNotes } from "../context/context";

const NoteContainer = () => {
  const { notes } = useNotes();

  return (
    <div className="grid grid-cols-2 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteContainer;
