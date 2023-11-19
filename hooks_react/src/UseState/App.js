import React, { useState } from 'react'
import {LoginFormA,LoginFormB  } from "./LoginForm";

const App = () => {
  const [visible,setVisible]=useState(true);
    
  return (
    <div>
      {visible ?<> 
        <LoginFormA></LoginFormA>
        <LoginFormB></LoginFormB>
        </>  : null}
        <button onClick={()=>{setVisible(!visible)}}>hide/show component</button>
    </div>
  )
}

export default App