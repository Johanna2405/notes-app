import { Link } from "react-router";

const NoteCard = ({ note }) => {
  const { title, text, category, id } = note;

  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-4 justify-between ${
        category === "random" ? "bg-[#d5e5fb]" : ""
      } ${category === "food" ? "bg-[#ebe4fc]" : ""}
      ${category === "fitness" ? "bg-[#fdece7]" : ""}
      ${category === "work" ? "bg-[#fae1ed]" : ""} bg-[#E5DBFD]`}
    >
      <div
        className={`badge badge-outline text-light text-[#431D5A] border-[#431D5A] tracking-wide`}
      >
        {category}
      </div>
      <h4
        className={`rozha-one-regular text-2xl lowercase ${
          category === "random" ? "text-[#245FDD]" : ""
        } 
        ${category === "food" ? "text-[#A91A3D]" : ""} 
        ${category === "fitness" ? "text-[#FD724B]" : ""} ${
          category === "work" ? "text-[#d42f79]" : ""
        }`}
      >
        {title}
      </h4>
      <p className="text-light text-[#431D5A] tracking-wide text-sm">{text}</p>
      <div className="flex justify-end">
        <Link key={id} to={`/notes/${id}`}>
          <button className="text-[#431D5A] text-4xl">✎</button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
