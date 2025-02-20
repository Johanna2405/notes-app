import { useState, useEffect } from "react";
import { NotesContext } from "./context";

const NotesContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName").toLocaleLowerCase() || "";
  });

  const [categories, setCategories] = useState("all");

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        userName,
        setUserName,
        notes,
        setNotes,
        categories,
        setCategories,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
