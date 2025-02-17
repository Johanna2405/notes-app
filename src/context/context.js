import { createContext, useContext } from "react";

const context = createContext();

const useNotes = () => {
  const context = useContext(context);
  if (!context)
    throw new Error("useContext must be used inside of a NotesContextProvider");
  // console.log('context: ', context);

  return context;
};

export { context, useNotes };
