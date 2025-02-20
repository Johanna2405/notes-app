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
        className={`border border-[#431D5A] text-light tracking-wide rounded-3xl px-4 py-2 text-[#431D5A] ${
          categories === "all" ? "bg-[#E5DBFD]" : ""
        }`}
      >
        All{" "}
      </button>
      <button
        onClick={() => setCatInView("random")}
        className={`border border-[#245FDD] text-light tracking-wide rounded-3xl px-4 py-2 text-[#245FDD] ${
          categories === "random" ? "bg-[#E5DBFD]" : ""
        }`}
      >
        Random
      </button>
      <button
        onClick={() => setCatInView("food")}
        className={`border border-[#A91A3D] text-light tracking-wide rounded-3xl px-4 py-2 text-[#A91A3D] ${
          categories === "food" ? "bg-[#E5DBFD]" : ""
        }`}
      >
        Food
      </button>
      <button
        onClick={() => setCatInView("fitness")}
        className={`border border-[#FD724B] text-light tracking-wide rounded-3xl px-4 py-2 text-[#FD724B] ${
          categories === "fitness" ? "bg-[#E5DBFD]" : ""
        }`}
      >
        Fitness
      </button>
      <button
        onClick={() => setCatInView("work")}
        className={`border border-[#d42f79] text-light tracking-wide rounded-3xl px-4 py-2 text-[#d42f79] ${
          categories === "work" ? "bg-[#E5DBFD]" : ""
        }`}
      >
        Work
      </button>
    </div>
  );
};

export default CategoriesFilter;
