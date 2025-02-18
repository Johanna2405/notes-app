import NoteCard from "./NoteCard";

const NoteContainer = ({ notes }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteContainer;
