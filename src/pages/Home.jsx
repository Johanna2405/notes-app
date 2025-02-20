import { useState, useEffect, useRef } from "react";
import { useNotes } from "../context/context";
import CreateForm from "../components/CreateForm";
import NoteContainer from "../components/NoteContainer";
import { useNavigate } from "react-router";
import CategoriesFilter from "../components/CategoriesFilter";

const Home = () => {
  const { userName, notes, setNotes } = useNotes();
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal(); // Open the modal
    }
  };

  return (
    <div className="flex flex-col gap-8 p-10 min-h-screen bg-[#AECEFF]">
      <h1 className="rozha-one-regular text-7xl text-[#FD724B]">
        hello {userName}! <br />
        how are you doing today?
      </h1>
      <div className="flex justify-between items-center mt-4">
        <h3 className=" tracking-normal card-title text-[#431D5A] text-2xl text-center font-light">
          Feel free to create a new note
        </h3>
        <button
          className="p-2 bg-[#D0E77D] rounded-full text-5xl hover:bg-[#E5DBFD] text-[#431D5A]"
          onClick={openModal}
        >
          ＋
        </button>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
          <CreateForm
            setNotes={setNotes}
            closeModal={() => modalRef.current.close()}
          />
        </div>
      </dialog>
      <h2 className="rozha-one-regular text-4xl text-[#431D5A]">your notes</h2>

      <CategoriesFilter />
      <NoteContainer />
    </div>
  );
};

export default Home;
