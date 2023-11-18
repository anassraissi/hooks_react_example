import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Header(){
  const theme =useContext(ThemeContext);
  console.log({theme});
  return (
    <div>Header
      <hr></hr>
    </div>
  )
}
