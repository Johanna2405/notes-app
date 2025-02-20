import NoteCard from "./NoteCard";
import { useNotes } from "../context/context";

const NoteContainer = () => {
  const { notes, categories } = useNotes();

  // Filter notes based on the selected category
  const filteredNotes =
    categories === "all"
      ? notes
      : notes.filter((note) => note.category === categories);

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredNotes.length > 0 ? (
        [...filteredNotes]
          .reverse()
          .map((note) => <NoteCard key={note.id} note={note} />)
      ) : (
        <p className="text-light tracking-wiede text-lg text-[#431D5A] ">
          No notes in this category.
        </p>
      )}
    </div>
  );
};

export default NoteContainer;
