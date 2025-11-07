import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://inb-backend.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Get all notes
  const getAllNotes = async () => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('Token'),
      },
    });
    const json = await response.json();
    setNotes(json)
  };
  // Add a note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('Token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note))

  };
  //Delete a note

  const deleteNote = async (id) => {
     //API Call for deleting a note on sever side
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      "auth-token":
         localStorage.getItem('Token')
      },
      body: JSON.stringify(),
    });
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
    const json = await response.json();
    console.log(json)
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call for editing a note on sever side
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
       "Content-Type": "application/json",
      "auth-token":
         localStorage.getItem('Token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic for editing a note on client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
         newNotes[index].title = title;
         newNotes[index].description = description;
         newNotes[index].tag = tag;
         break;
      }
    }
    setNotes(newNotes);
    const json = await response.json();
  };
  //Get User's Info
  const getUser = async () => {
  const response = await fetch(`${host}/api/auth/getuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("Token"),
    },
  });
  const user = await response.json();
  return user;
};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes, getUser }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
