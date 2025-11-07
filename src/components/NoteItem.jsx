import React, { useContext, useState } from "react";
import contextValue from "../context/notes/noteContext";
import { Loader } from "lucide-react";


export default function NoteItem(props) {
  const [del,setDel] = useState(false)
  const { note, updateNote } = props;
  const context = useContext(contextValue);
  const { deleteNote } = context;
  return (
    <div className="border border-gray-300 bg-green-50 relative shadow w-fit flex flex-col gap-2 p-4 mt-4 rounded overflow-hidden max-w-[200px] sm:max-w-[300px]">
      {
        del &&
        <div className="bg-white/30 backdrop-blur-[1px] w-full h-full flex flex-col justify-center items-center absolute right-0 top-0">
          <Loader size={40} className="spin-slow"/>
          <p className="text-sm">Deleting note...</p>
        </div>
      }
          <h5 className="text-xl font-semibold tracking-tight">{note.title}</h5>
          <p className="max-w-full">{note.description}</p>
          <p className="text-purple-800">#{note.tag}</p>
          {/* Note Btns */}
          <div className="flex justify-end">
          <abbr title="Edit note">
            <button type="button"
              className=" mx-1 bg-amber-300 p-1 px-2 rounded hover:bg-amber-500 transition cursor-pointer"
              onClick={() => {
                updateNote(note);
              }}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </abbr>
          <abbr title="Delete Note">
            <button type="button"
              href="#"
              className=" mx-1 bg-red-400 hover:bg-red-500 transition cursor-pointer p-1 px-2 rounded"
              onClick={async () => {
                setDel(true)
                await deleteNote(note._id);
                setDel(false)
                props.showAlert('Note Deleted Successfully', 'danger')
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </abbr>
             </div>
        </div>
  );
}
