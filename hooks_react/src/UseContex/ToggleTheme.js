import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const ToggleTheme = () => {
    const themeContext=useContext(ThemeContext)
  return (
    <div>
        <button onClick={themeContext.toggleTheme}>
            ToggleTheme
        </button>
        </div>
  )
}
