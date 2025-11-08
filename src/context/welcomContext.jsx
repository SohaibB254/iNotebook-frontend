import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context
const Wcontext = createContext();

// 2. Create the provider component
export const WelcomeProvider = ({ children }) => {
  const [wMsg, setWMsg] = useState(() => {
    // ✅ Load initial value from localStorage (if any)
    return localStorage.getItem("welcomeMsg") || "";
  });

  // ✅ Save to localStorage whenever wMsg changes
  useEffect(() => {
    if (wMsg !== "") {
      localStorage.setItem("welcomeMsg", wMsg);
    }
  }, [wMsg]);

  return (
    <Wcontext.Provider value={{ wMsg, setWMsg }}>
      {children}
    </Wcontext.Provider>
  );
};

// 3. Create a custom hook to use the context
export const useWMsg = () => {
  return useContext(Wcontext);
};
