import { useState } from "react";

const CreateForm = ({ setNotes }) => {
  const [form, setForm] = useState({
    title: "",
    category: "Cat 1",
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
      category: "Cat 1",
      text: "",
    });
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
          <option value="Cat 1">Cat 1</option>
          <option value="Cat 2">Cat 2</option>
          <option value="Cat 3">Cat 3</option>
          <option value="Cat 4">Cat 4</option>
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
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
