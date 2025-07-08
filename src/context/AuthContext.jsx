import React,{createContext, useState} from 'react'

 export const AuthContext = createContext()

 export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const isAuthenticated = () => {
        if (user != null){
            return true;
        }else return false;
    }; 
    
    const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    setUsername("")
    setPassword("")
  }

    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            login,
            logout,
            username,
            password,
            setUsername,
            setPassword
        }}>
        {children}
        </AuthContext.Provider>
    )
 }

export default AuthContext
