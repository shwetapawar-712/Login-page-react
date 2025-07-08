import { useContext, useState } from 'react'
import Login from './components/Login'
import './App.css'
import PrivatePage from './components/PrivatePage'
import AuthContext from './context/AuthContext'
import Signup from './components/Signup'


function App() {
  const {isAuthenticated} = useContext(AuthContext)
  const [issignup, setIssignup] = useState(false)

  return (
    <>
     <div className='bg-gray-600  flex flex-col items-center justify-center w-full h-full gap-4 p-4 rounded-2xl shadow-md'>
      {isAuthenticated() ? (<PrivatePage/> ):( <>
      {issignup ? <Signup/> : <Login/>}
      <p  className='text-sm text-white'>
        {issignup ?  'Already have an account?' : "Don't have an account?"}
        <button className='text-blue-200 ml-1 underline cursor-pointer'
        onClick={() => setIssignup(!issignup)}>{issignup ? 'Login' : 'Signup'}</button>
      </p>
      </>)}
     </div>
    </>
  )
}

export default App
