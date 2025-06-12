import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return (
    <UserContextProvider>
      <h1>Learning Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>

    // or
    // <UserContext.Provider value={"hello"}>
    //   <h1>Learning Context API</h1>
    //   <Login />
    //   <Profile />
    // </UserContext.Provider>
  )
}

export default App