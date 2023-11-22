import React, { useContext } from 'react'
import Header from './Header'
import Login from './Login'
import AuthProvider, { AuthContext } from './AuthContext'


const App = () => {
  const   authContext=useContext(AuthContext)
  return (
    <div className='container'>
      <Header></Header>
      {authContext.auth.email ? 'wellcome': <Login/>}  
    </div>
  )
}

function AppWithStore(){
  return(
        <AuthProvider>
        <App/>
        </AuthProvider>
  )
}
export default AppWithStore;

