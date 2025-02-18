import { useState } from "react";
import { NotesContext } from "./context";

const NotesContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <NotesContext.Provider value={{ userName, setUserName }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
