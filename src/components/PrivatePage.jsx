import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


const PrivatePage=()=> {
  
  const {user, logout} = useContext(AuthContext)
 
  return (
        <div className="flex flex-col items-center gap-4 p-6 w-80 rounded-xl shadow-lg 
                    bg-white/20 backdrop-blur-md border border-white/30 
                    transition-all duration-300">
      <h1 className='text-2xl black text-white'>Welcome Page</h1>
      <h2>Hello {user?.name},<br /> Thank You for Visiting Us !!</h2>
     
      <button className='w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 cursor-pointer'
      onClick={logout}>Logout</button>
    </div>
  )
}

export default PrivatePage
