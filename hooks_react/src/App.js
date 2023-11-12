import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { useCount } from './useCount';  for external call
function useCount(){
  const [count,setCount]=useState(0);
          const increment=()=>{
              setCount(c=>c+1)
          } 
          const decrement=()=>{
            setCount(c=> c>0 ? c-1 : c)
          }
       return {count,increment,decrement}   
}
function App() {
 const {count,increment,decrement}=useCount();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
