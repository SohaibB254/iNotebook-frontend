import React, { useContext, useEffect, useState } from "react";
import contextValue from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import { Loader, X } from "lucide-react";
import { useWMsg } from "../context/welcomContext";

export default function Notes(props) {
  const { wMsg} = useWMsg()
  const context = useContext(contextValue);
  const { notes, getAllNotes, editNote, getUser } = context;
  const [loading,setLoading]= useState(false)

  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const navigate = useNavigate();

  // Fetch notes and user info
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      if (localStorage.getItem("Token")) {
        await getAllNotes();
        const userData = await getUser();
        setUser(userData);
        setLoading(false)
      } else {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  const updateNote = (currentNote) => {
    setModalOpen(true);
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = async () => {
    setLoading(true)
    await editNote(note.id, note.etitle, note.edescription, note.etag);
    setModalOpen(false);
    setLoading(false)
    props.showAlert("Note Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-4">
      {/* Loading page */}
      { loading &&
      <div className="fixed h-full w-full top-0 bg-white/30 backdrop-blur-[2px] flex justify-center z-50 items-center">
        <h1><Loader className="spin-slow text-gray-700" size={50}/></h1>
      </div>

      }
      {/* Welcome Message */}
      {user && (
        <div className="sm:px-16 px-4  text-xl font-medium">
          {wMsg}, <span className="text-green-600">{user.name}</span> 👋
        </div>
      )}

      <AddNote showAlert={props.showAlert} />
      <div className="sm:px-16 px-4 mt-4">
        <h1 className="text-2xl">Your Notes</h1>
        <div className="text-gray-400">
          {notes.length === 0 && "No Notes to display"}
        </div>

        {/* Notes container */}
        <div className="flex gap-4 flex-wrap">
          { notes.map((note) => (
            <NoteItem
              key={note._id}
              showAlert={props.showAlert}
              updateNote={updateNote}
              note={note}
            />
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      <div
        className={`w-screen h-screen ${
          modalOpen ? "flex" : "hidden"
        } justify-center bg-black/10 backdrop-blur-sm items-center fixed top-0`}
      >
        <div className="w-fit border border-gray-300 rounded p-4 bg-white">
          <div className="flex justify-between">
            <h5 className="font-semibold text-xl">Edit Note</h5>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="cursor-pointer transition rounded px-2 p-1"
            >
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3 flex flex-col">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="border rounded border-gray-300 outline-none p-1 px-2"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  onChange={onChange}
                  minLength={2}
                  required
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="border rounded border-gray-300 outline-none p-1 px-2"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="border rounded border-gray-300 outline-none p-1 px-2"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={onChange}
                />
              </div>
            </form>
          </div>

          <div className="flex justify-between gap-3">
            <button
              onClick={handleClick}
              type="button"
              className={`cursor-pointer ${loading?'bg-gray-500 cursor-not-allowed pointer-events-none':'bg-green-500 '} hover:bg-green-700 transition text-gray-100 rounded px-2 p-1`}
              disabled={note.etitle.length < 3 || note.edescription.length < 5}
            >
              {loading? 'Updating...':'Update note'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
