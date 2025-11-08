import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react';
import React, { useState }from 'react'
import { Link,useNavigate } from 'react-router'
import { useWMsg } from '../context/welcomContext';


export default function SignUp(props) {
  const { setWMsg } = useWMsg()

  const [loading,setLoading] = useState(false)

  const [showPass,setShowPass] = useState(false)

  const [credentials, setCredentials] = useState({name:'', email: '', password: '' });
  let navigate = useNavigate();
  const {name, email, password} = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch('https://inb-backend.onrender.com/api/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name,email, password })
    });

    const json = await response.json();
    console.log(json);
    if(json.success){
      //redirect to account
      localStorage.setItem('Token', json.authToken);
      setLoading(false)
      navigate('/');
      props.showAlert('Account Created Successfully','success');
      setWMsg('Welcome to Inotebook')
    }
    else {
      props.showAlert('Invalid Credentials','danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex flex-col items-center gap-4 px-4 mt-16'>
      <h2 className='text-green-500 text-2xl font-medium'>Create your free iNB account Now!</h2>
      <form className='flex flex-col border p-4 border-gray-300  rounded ' onSubmit={handleSubmit}>
  <div className="mb-3 flex flex-col gap-1">
    <label htmlFor="name" className="flex gap-2 items-center text-gray-500"><User size={18}/>Username</label>
    <input placeholder='Enter your username' type="text" className="border border-gray-300 p-2 px-4 rounded outline-none" id="name" name='name' onChange={onChange} required aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 flex flex-col gap-1">
    <label htmlFor="email" className="flex gap-2 items-center text-gray-500"><Mail size={18}/> Email</label>
    <input placeholder='e.g, abc@gmail.com' type="email" className="border border-gray-300 p-2 px-4 rounded outline-none" id="email" name='email' onChange={onChange} required aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 flex flex-col gap-1">
    <label htmlFor="password" className="flex gap-2 items-center text-gray-500"><Lock size={18}/>Password</label>
    <div className='border border-gray-300 flex items-center rounded px-4'>
    <input placeholder='Enter your password' type={`${showPass?'text':'password'}`} className=" py-2   outline-none" id="password" name='password' required minLength={5} onChange={onChange}/>
    <span className='text-gray-400' onClick={()=>setShowPass(prev => !prev)}>{showPass?<EyeClosed size={18}/>:<Eye size={18}/>}</span>
    </div>
  </div>
  <p className='text-sm my-2'>Already have an account?<Link className='text-blue-500' to='/login'> Login </Link>now</p>
  <button type="submit" className={`${loading? 'bg-gray-500':'bg-green-500'} flex-1 cursor-pointer hover:bg-green-700 transition text-gray-100 rounded px-2 p-1`}>{loading?'Submitting...':'Submit'}</button>
</form>
    </div>
  )
}
