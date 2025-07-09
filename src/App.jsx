import { useContext, useState } from 'react'
import Login from './components/Login'
import './App.css'
import PrivatePage from './components/PrivatePage'
import AuthContext from './context/AuthContext'
import Signup from './components/Signup'
import { Routes ,Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [issignup, setIssignup] = useState(false);

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center w-screen h-screen gap-4 p-2 rounded-2xl shadow-md">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {issignup ? <Signup /> : <Login />}
              <p className="text-sm text-white">
                {issignup ? 'Already have an account?' : "Don't have an account?"}
                <button
                  className="text-blue-200 ml-1 underline cursor-pointer"
                  onClick={() => setIssignup(!issignup)}
                >
                  {issignup ? 'Login' : 'Signup'}
                </button>
              </p>
            </>
          }
        />

        <Route
          path="/private"
          element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;