import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
          const increment=()=>{
              setCount(c=>c+1)
          } 
          const decrement=()=>{
            setCount(c=> c>0 ? c-1 : c)
          } 
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
