import { createContext, useContext } from "react";

const NotesContext = createContext();

const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context)
    throw new Error("useContext must be used inside of a NotesContextProvider");
  // console.log('context: ', context);

  return context;
};

export { NotesContext, useNotes };
