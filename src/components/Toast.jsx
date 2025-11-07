// src/components/Toast.js
import React, { useEffect } from "react";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  const color =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed bottom-6 right-6 text-white px-4 py-3 rounded-lg shadow-lg ${color} animate-slideIn`}
    >
      {message}
    </div>
  );
}
