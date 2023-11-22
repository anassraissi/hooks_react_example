import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export default function Header() {
  const authContext=useContext(AuthContext)
  const logout=()=>{
      authContext.setAuth({});
      localStorage.removeItem('email');
      localStorage.removeItem('password');

  }
  return (
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">React hooks</a>
         
            {authContext.auth.email ? <div>
             {authContext.auth.email} <button className='btn btn-danger btn-sm' onClick={logout}>Logout</button>
            </div>:<h4> You need to Login</h4>}
        
        </div>
        </nav>
  )
}
