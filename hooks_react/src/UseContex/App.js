import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Header from "./Header";

const App = () => {
  return (
    <div>
      <h1>useContext example</h1>
    <ThemeProvider>
      <Header></Header>
    </ThemeProvider>
    </div>
  )
}

export default App