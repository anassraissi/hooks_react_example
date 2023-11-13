import React from 'react'

import { useEffect, useState } from 'react';
// import { useColor } from './useColor';  for external call
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
const randomColor=()=> 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
function useColor(){
  useEffect(()=>{
    function handelBackroundColor(){
      document.body.style.background=randomColor();
    }
    handelBackroundColor();

    window.addEventListener('mousedown',handelBackroundColor) // make tthis event when the component is mounted.
    return ()=>{
        window.removeEventListener("mousedown",handelBackroundColor);  //remove event when the component is inmounted.
    }
  },[])
}

function App() {

 const {count,increment,decrement}=useCount();
 useColor();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App