import { useNotes } from "../context/context";

const CategoriesFilter = () => {
  const { categories, setCategories } = useNotes();
  const setCatInView = (category) => {
    setCategories(category); // No unnecessary updates
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setCatInView("all")}
        className={`border border-primary rounded-3xl ${
          categories === "all" ? "bg-slate-400" : ""
        }`}
      >
        All{" "}
      </button>
      <button
        onClick={() => setCatInView("random")}
        className={`border border-primary rounded-3xl ${
          categories === "random" ? "bg-slate-400" : ""
        }`}
      >
        Random
      </button>
      <button
        onClick={() => setCatInView("food")}
        className={`border border-primary rounded-3xl ${
          categories === "food" ? "bg-slate-400" : ""
        }`}
      >
        Food
      </button>
      <button
        onClick={() => setCatInView("fitness")}
        className={`border border-primary rounded-3xl ${
          categories === "fitness" ? "bg-slate-400" : ""
        }`}
      >
        Fitness
      </button>
      <button
        onClick={() => setCatInView("work")}
        className={`border border-primary rounded-3xl ${
          categories === "work" ? "bg-slate-400" : ""
        }`}
      >
        Work
      </button>
    </div>
  );
};

export default CategoriesFilter;
