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
    <div className="flex flex-col  justify-center items-center min-h-screen bg-[#E5DBFD] p-10">
      <div className="flex flex-col gap-8 w-4/5 p-8 border border-[#431D5A] rounded-2xl">
        <div className="  flex justify-between">
          <h1 className="rozha-one-regular text-5xl text-[#431D5A]">
            edit note
          </h1>
          <button
            className="text-3xl text-[#431D5A] font-normal"
            type="button"
            onClick={() => navigate(-1)}
          >
            X
          </button>
        </div>
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
            className="input input-bordered bg-slate-100 w-full tracking-wide text-light text-[#431D5A] text-md"
          />
          <select
            className="select select-bordered bg-slate-100 w-full text-md tracking-wide text-light text-[#431D5A]"
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
            className="textarea textarea-bordered text-md bg-slate-100 w-full tracking-wide text-light text-[#431D5A]"
            placeholder="Text"
            name="text"
            value={form.text}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-between gap-4 py-4">
            <div className="flex gap-4">
              <button
                className="btn bg-[#D0E77D] hover:bg-[#E5DBFD] border-[#D0E77D] rozha-one-regular text-[#431D5A] text-xl"
                type="submit"
              >
                save
              </button>
              <button
                className="btn bg-[#FD724B] hover:bg-[#D0E77D] border-[#FD724B] rozha-one-regular text-[#431D5A] text-xl"
                type="button"
                onClick={deleteNote}
              >
                delete note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
