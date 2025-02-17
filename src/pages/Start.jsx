import { Navigate, useOutletContext } from "react-router";
import { useState } from "react";

const Start = () => {
  const { userName, setUserName } = useOutletContext();
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (!userName.trim()) {
        console.error("Please enter your name");
        return;
      }
      console.log(userName);
      setRedirect(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body items-center gap-4">
          <img src="/src/assets/logoipsum-284.svg" alt="Logo" />
          <h2 className="card-title">What is your name?</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
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
              <button className="btn">Let's go</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Start;
