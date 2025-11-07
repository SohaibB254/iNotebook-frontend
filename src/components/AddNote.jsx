import React, { useContext, useState } from "react";
import contextValue from "../context/notes/noteContext";
import { Plus, PlusCircle } from "lucide-react";
export default function AddNote(props) {
  const [loading,setLoading] = useState(false)
  const context = useContext(contextValue);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = async (e) => {
    setLoading(true)
    e.preventDefault();
    await addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    setLoading(false)
    props.showAlert("Note added successfully", "success");

  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (

      <div className="flex flex-col mt-4  sm:px-16 px-4">
        <h1 className="text-2xl font-semibold">Add a Note</h1>
        <form>
          <div className="mb-3 flex flex-col gap-1">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-4 p-2"
              id="title"
              name="title"
              placeholder="e.g, Workout"
              value={note.title}
              onChange={onChange}
              minLength={3}
              required
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-4 p-2"
              id="description"
              name="description"
              placeholder="e.g, workout at 6 pm"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-4 p-2"
              id="tag"
              name="tag"
              placeholder="e.g, health"
              value={note.tag}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            type="submit"
            className={`   ${note.title.length < 3 || note.description.length < 5 || loading
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-green-500 hover:bg-green-700 cursor-pointer'} flex-1 flex gap-1 items-center justify-center  transition text-gray-100 rounded p-2 px-4`}
            onClick={handleClick}
          >
          <PlusCircle /> {loading?'Adding...':'Add note'}
          </button>
        </form>
      </div>

  );
}
