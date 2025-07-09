import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import loginImg from '../assets/loginImg.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { username, password, setUsername, setPassword, login } = useContext(AuthContext)
  const  [message, setMessage] = useState('')
  const navigate = useNavigate();

 
  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    if (isValid) {
      login({ name: username });
      navigate('/private');  
    }
  };


const handleValidation = () => {
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (password === "") {
    setMessage("❌ Please enter password");
    return false;
  } else if (!regExp.test(password)) {
    setMessage("❌ Password must include uppercase, lowercase, number & special character.");
    return false;
  } else {
    setMessage("✅ Password is valid");
    return true;
  }
};

  return (
    <div className="flex flex-col items-center gap-4 p-6 w-80 rounded-xl shadow-lg 
                    bg-white/20 backdrop-blur-md border border-white/30 
                    transition-all duration-300">
       <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 w-full">
      <img src={loginImg} alt="Login" className="w-24 h-24 rounded-full shadow-md" />

      <h1 className="text-2xl font-bold text-white">Login</h1>
   
      <input
        type="text"
        placeholder="Enter username"
        className="w-full px-4 py-2 border border-white/30 rounded-md 
                   bg-white/10 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-violet-400"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        className="w-full px-4 py-2 border border-white/30 rounded-md 
                   bg-white/10 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-violet-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {message && <p className='text-sm text-white text-center'>{message}</p>}
      <button
      type='submit'
        className="w-full py-2 bg-violet-500 text-white rounded-md 
                   hover:bg-violet-800 transition-colors cursor-pointer"
        
      >
        Login
      </button>
      </form>
    </div>
  )
}

export default Login
