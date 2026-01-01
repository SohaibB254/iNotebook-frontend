import { Mail } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <div className="sm:px-16 px-4 mt-8 ">
      <h1 className="font-medium text-2xl text-center">
        This is <span className="text-green-600">iNoteBook</span>
      </h1>
      <div className="flex  flex-col justify-between  gap-10 mt-8">
        <p className="flex-1 text-gray-500 line-clamp-4 sm:line-clamp-none">
          Note Maker is a modern and easy-to-use web application designed to
          help users organize their thoughts, ideas, and daily tasks in one
          secure place. Built using <span className="text-blue-600 font-semibold">React</span> for the frontend, <span className="text-green-600 font-semibold">Node.js</span> and <span className="text-yellow-600 font-semibold">Express </span>
          for the backend, and <span className="text-green-800 font-semibold">MongoDB</span> for data storage, the app delivers a
          smooth and reliable note-taking experience.<br/>
           Users can create their own
          account and securely log in to access their personal notes.<br/> Once
          logged in, they can add, edit, or delete notes at any time. All notes
          are instantly displayed on the screen, making it easy to view and
          manage information without refreshing the page.<br/> The application
          focuses on simplicity, speed, and usability. With a clean interface
          and real-time updates, Note Maker ensures that important information
          is always just a click away. Data is stored safely in the database,
          allowing users to access their notes from anywhere after logging in.
          This project demonstrates a full-stack approach, combining frontend
          and backend technologies to create a practical and scalable solution
          for everyday note management.
        </p>
        <p className="flex gap-2 items-center italic font-sans text-gray-500 "><Mail size={18}/> sohaibxzaman@gmail.com</p>
      </div>
    </div>
  );
}
