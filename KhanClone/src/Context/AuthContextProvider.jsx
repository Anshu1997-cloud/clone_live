import React, { useState  } from 'react'
import { createContext } from 'react'

export  const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authState , setAuthSate] = useState({
        token : null,
        isAuth : false,
    })

    const login = (token) => {
           setAuthSate({
             token,
             isAuth : true,
           });
    }
  return (
    <AuthContext.Provider value = {{ authState , login  }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider