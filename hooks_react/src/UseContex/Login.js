import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Login(){
  const themeContext =useContext(ThemeContext);
  console.log({themeContext});
  let style={};
  if(themeContext.theme=='dark'){
      style={backgroundColor:'black',color:'white'}
  }
  else{
    style={backgroundColor:'white',color:'black'}

  }
  return (
    <div style={style}>Login
      <hr></hr>
    </div>
  )
}
