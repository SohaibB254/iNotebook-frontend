import React,{ useState } from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
import Home from './pages/Home';
import About from './pages/About';
import TermsConditions from './pages/TermsConditions.jsx';
import Login from './auth/Login';
import SignUp from './auth/SignUp'
import Footer from './components/Footer';
import Toast from './components/Toast';
import { WelcomeProvider } from './context/welcomContext.jsx';

const App = () => {
  const [toast, setToast] = useState(null);

  const showAlert = (message, type) => {
    setToast({ message, type });
  };

  return (
<>
<WelcomeProvider>
    <NoteState>
        <BrowserRouter>
        <div className='min-h-screen flex-col flex '>
          <Navbar />
            {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
          <div className='flex flex-col grow'>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />}></Route>
            <Route exact path="/policy" element={<TermsConditions />}></Route>
          </Routes>
          </div>
          <Footer/>
           </div>
        </BrowserRouter>
      </NoteState>
   </WelcomeProvider>
</>
  )
}

export default App
