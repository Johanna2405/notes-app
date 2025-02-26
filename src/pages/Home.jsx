import { useRef } from "react";
import { useNotes } from "../context/context";
import CreateForm from "../components/CreateForm";
import NoteContainer from "../components/NoteContainer";
import CategoriesFilter from "../components/CategoriesFilter";

const Home = () => {
  const { userName, setNotes } = useNotes();
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div className="flex flex-col gap-8 py-10 px-6 min-h-screen bg-[#AECEFF]">
      <h1 className="font-Rozha text-5xl text-[#FD724B] lowercase">
        hello {userName}! <br />
        how are you doing today?
      </h1>
      <div className="flex justify-between items-center mt-4 md:justify-start gap-8">
        <h3 className="tracking-normal card-title text-[#431D5A] text-2xl text-left font-light">
          Feel free to create a new note
        </h3>
        <button
          className="p-2 bg-[#D0E77D] rounded-full text-5xl hover:bg-[#E5DBFD] text-[#431D5A]"
          onClick={openModal}
        >
          ＋
        </button>
      </div>

      <dialog ref={modalRef} className="modal ">
        <div className="modal-box px-8 bg-[#FD724B]">
          <div className="modal-action  m-0">
            <form method="dialog">
              <button className="text-3xl text-[#E5DBFD] font-normal">X</button>
            </form>
          </div>
          <CreateForm
            setNotes={setNotes}
            closeModal={() => modalRef.current.close()}
          />
        </div>
      </dialog>
      <h2 className="font-Rozha text-4xl text-[#431D5A]">your notes</h2>

      <CategoriesFilter />
      <NoteContainer />
    </div>
  );
};

export default Home;
