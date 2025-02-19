import { useParams, useNavigate } from "react-router";
import { useNotes } from "../context/context";
import { useState, useEffect } from "react";

const EditNote = () => {
  const { noteId } = useParams();
  const { notes, setNotes } = useNotes();
  const navigate = useNavigate();

  // Ensure hooks are called before any return statements
  const [form, setForm] = useState({ title: "", category: "", text: "" });

  useEffect(() => {
    const currNote = notes.find((note) => note.id === noteId);
    if (currNote) {
      setForm({
        title: currNote.title,
        category: currNote.category,
        text: currNote.text,
      });
    }
  }, [noteId, notes]);

  // If the note is not found, navigate away instead of returning early
  useEffect(() => {
    if (!notes.some((note) => note.id === noteId)) {
      navigate("/home"); // Avoid rendering errors by leaving the page
    }
  }, [noteId, notes, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission (update note)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...form, id: noteId } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/home"); // Redirect after saving
  };

  // Handle deleting the note
  const deleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/home"); // Redirect after deletion
  };

  return (
    <div className="flex flex-col gap-8">
      <h1>Edit Note</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        id="edit-form"
      >
        <input
          value={form.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
        />
        <select
          className="select select-bordered w-full"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="random">Random</option>
          <option value="food">Food</option>
          <option value="fitness">Fitness</option>
          <option value="work">Work</option>
        </select>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Text"
          name="text"
          value={form.text}
          onChange={handleChange}
        ></textarea>
        <div className="flex gap-4 py-4">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <button className="btn btn-error" type="button" onClick={deleteNote}>
            Delete note
          </button>
          <button className="btn" type="button" onClick={() => navigate(-1)}>
            X
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
