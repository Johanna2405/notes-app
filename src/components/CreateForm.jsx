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
    <div className=" flex flex-col gap-4 px-4  m-x4 rounded-2xl">
      <h2 className="rozha-one-regular text-5xl text-[#E5DBFD]">
        Create a note
      </h2>
      <form
        className="flex flex-col gap-3"
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
          className="input bg-slate-100 input-bordered w-full tracking-wide text-light text-[#431D5A] text-md"
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
          required
          className="textarea textarea-bordered bg-slate-100 text-md w-full tracking-wide text-light text-[#431D5A]"
          placeholder="Text"
          name="text"
          value={form.text}
          onChange={handleChange}
        ></textarea>
        <div className="flex gap-4 py-4">
          <button
            className="btn bg-[#D0E77D] hover:bg-[#E5DBFD] border-[#D0E77D] rozha-one-regular text-[#431D5A] text-xl"
            type="submit"
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
