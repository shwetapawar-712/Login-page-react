import React,{ useContext} from 'react'
import AuthContext from '../context/AuthContext'


const Signup= () => {

    const {username , password ,setUsername, setPassword, login} = useContext(AuthContext)

     const handleSignup = () => {
  if (username && password) {
    login({ name: username })  
  } else {
    alert("Please enter both username and password")
  }
}
  return (
       <div className="flex flex-col items-center gap-4 p-6 w-80 rounded-xl shadow-lg 
                    bg-white/20 backdrop-blur-md border border-white/30 
                    transition-all duration-300">
      <h1 className='text-2l font-bold text-white'>Sign Up</h1>
     
      <input type="text" 
      placeholder=' Enter username' 
      className="w-full px-4 py-2 border border-white/30 rounded-md 
                   bg-white/10 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-violet-400"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />

      <input type="password" 
      placeholder='Enter Password'
     className="w-full px-4 py-2 border border-white/30 rounded-md 
                   bg-white/10 text-white placeholder-white/70
                   focus:outline-none focus:ring-2 focus:ring-violet-400"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
     
      <button className='w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 cursor-pointer'
      onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup
