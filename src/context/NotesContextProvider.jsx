import { useState, useEffect } from "react";
import { NotesContext } from "./context";

const NotesContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ userName, setUserName, notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
