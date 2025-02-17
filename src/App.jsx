import { BrowserRouter, Routes, Route } from "react-router";
import NotesContextProvider from "./context/NotesContextProvider.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/HOme.jsx";
import EditNote from "./pages/EditNote.jsx";
import Start from "./pages/Start.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Start />} />
            <Route path="home" element={<Home />} />
            <Route path="notes/:noteId" element={<EditNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
