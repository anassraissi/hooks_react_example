import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Header from "./Header";
import Login from './Login';
import { ToggleTheme } from './ToggleTheme';

const App = () => {
  return (
    <div>
      <h1>useContext example</h1>
    <ThemeProvider>
      <Header></Header>
      <ToggleTheme></ToggleTheme>
      <Login></Login>
    </ThemeProvider>
    </div>
  )
}

export default App