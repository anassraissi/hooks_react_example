import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Header(){
  const themeContext =useContext(ThemeContext);
  console.log({themeContext});
  let style={};
  if(themeContext.theme=='dark'){
      style={backgroundColor:'blue',color:'white'}
  }
  else{
    style={backgroundColor:'white',color:'black'}

  }
  return (
    <div style={style}>Header
      <hr></hr>
    </div>
  )
}
