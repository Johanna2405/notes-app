import { useState } from "react";
import { useNotes } from "../context/context";

const CreateForm = ({ setNotes, closeModal }) => {
  const { categories, setCategories } = useNotes();

  const [form, setForm] = useState({
    title: "",
    category: "random",
    text: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { ...form, id: crypto.randomUUID() };

    setNotes((prev) => {
      const updatedNotes = [...prev, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    setForm({
      title: "",
      category: "random",
      text: "",
    });

    closeModal();
  };

  return (
    <div className=" flex flex-col gap-4 p-8 bg-slate-200 rounded-2xl">
      <h2>Create a note</h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        id="add-form"
      >
        <input
          required
          value={form.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
        />
        <select
          className="select select-bordered w-full "
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
          required
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
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
