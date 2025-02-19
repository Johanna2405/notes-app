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
    <div className="flex flex-col gap-8">
      <h1>
        Hello {userName}! <br />
        How are you doing today?
      </h1>
      <div className="bg-slate-200 rounded-2xl p-8 flex justify-between items-center">
        <h3>Feel free to create a new note</h3>
        <button
          className="p-2 bg-slate-400 rounded-full text-5xl"
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
      <h2>Your Notes</h2>
      {/* <div className="flex gap-4">
        <div className="badge badge-outline">Cat 1</div>
        <div className="badge badge-primary badge-outline">Cat 2</div>
        <div className="badge badge-secondary badge-outline">Cat 3</div>
        <div className="badge badge-accent badge-outline">Cat 4</div>
      </div> */}
      <CategoriesFilter />
      <NoteContainer />
    </div>
  );
};

export default Home;
