import { Navigate } from "react-router";
import { useState } from "react";
import { useNotes } from "../context/context";

const Start = () => {
  const { userName, setUserName } = useNotes();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (!userName.trim()) {
        console.error("Please enter your name");
        return;
      }

      localStorage.setItem("userName", userName);

      setRedirect(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="bg-[#FD724B] flex flex-col justify-center min-h-screen overflow-x-hidden items-center gap-8 p-10">
      <img src="/logo.svg" alt="Logo" className="w-56 py-8" />
      <div className="flex flex-col items-center justify-center gap-4 bg-[#E5DBFD] p-8 rounded-2xl w-full sm:w-4/5 md:w-1/2 lg:w-2/6 ">
        <h2 className="tracking-normal text-[#431D5A] text-center text-lg font-light">
          What is your name?
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Your name"
            className="input input-bordered bg-slate-100 w-full tracking-wide text-light text-[#431D5A]"
          />
          {/* <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Choose your Era
            </option>
            <option>🎸 Taylor Swift</option>
            <option>✨ Fearless</option>
            <option>🎆 Speak now</option>
            <option>❤️ Red</option>
            <option>🕊️ 1989</option>
            <option>🐍 Reputation</option>
            <option>💖 Lover</option>
            <option>🍂 Folkmore</option>
            <option>🌙 Midnights</option>
            <option>🖋️ TTPD</option>
          </select> */}
          <div className="card-actions justify-center">
            <button className="btn mt-4 bg-[#D0E77D] hover:bg-[#E5DBFD] border-[#D0E77D] font-Rozha text-[#431D5A] text-xl ">
              let's go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Start;
