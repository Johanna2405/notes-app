import { Link } from "react-router";

const NoteCard = ({ note }) => {
  const { title, text, category, id } = note;
  return (
    <div className="rounded-2xl p-8 flex flex-col gap-4 bg-slate-200">
      <div className="badge badge-outline">{category}</div>
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="flex justify-end">
        <Link key={id} to={`/notes/${id}`}>
          <button className="btn">✎</button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
