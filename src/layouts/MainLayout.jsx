import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col justify-between py-4 px-6">
        <Outlet context={{ userName, setUserName }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
