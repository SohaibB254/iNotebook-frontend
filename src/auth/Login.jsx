import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import React, { useState} from 'react';
import  { useNavigate,Link} from 'react-router-dom';

export default function Login(props) {
  const [showPass,setShowPass] = useState(false)
  const [loading,setLoading] = useState(false)

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch('https://inb-backend.onrender.com/api/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if(json.success){
      //redirect to account
      localStorage.setItem('Token', json.authToken);
      navigate('/');
      setLoading(false)
      props.showAlert('Logged in successfully','success');
    }
    else {
      props.showAlert('Something went wrong','danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col items-center  '>
      <h2 className='mb-4 text-green-500 font-medium text-xl'>Login to continue to iNoteBook</h2>
      <form className='border p-4 rounded  border-gray-300 flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-1">
          <label htmlFor="email" className="flex gap-2 items-center text-gray-500"><Mail size={18}/> Email</label>
          <input required placeholder='e.g, abc@gmail.com' type="email" className="border border-gray-300 p-2 px-4 rounded outline-none" name="email" id="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 flex flex-col gap-1">
          <label htmlFor="password" className="flex gap-2 items-center text-gray-500"><Lock size={18}/>Password </label>
          <div className='border border-gray-300 flex px-4 items-center rounded'>
          <input required placeholder='Enter your password' type={`${showPass?'text':'password'}`} className=" py-2   outline-none" name="password" id="password" onChange={onChange} value={credentials.password} />
            <span className='text-gray-400' onClick={()=>setShowPass(prev => !prev)}>{showPass?<EyeClosed size={18}/>:<Eye size={18}/>}</span>
          </div>
        </div>
        <p className='text-sm'>Don't have an account?<Link to='/signup' className='text-blue-500'>Create one </Link>now</p>
        <button type="submit" className={` ${loading ?'bg-gray-500 pointer-events-none':'bg-green-500'}  flex-1 cursor-pointer hover:bg-green-700 transition text-gray-100 rounded px-2 p-1`}>{loading?'Submitting...':'Submit'}</button>
      </form>
    </div>
  );
}
