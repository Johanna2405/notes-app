import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NotesContextProvider from "../context/NotesContextProvider";

const MainLayout = () => {
  return (
    <NotesContextProvider>
      <div className="flex flex-col min-h-screen justify-between">
        <main className="flex flex-col justify-between">
          <Outlet />
        </main>
        <Footer />
      </div>
    </NotesContextProvider>
  );
};

export default MainLayout;
