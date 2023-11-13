import { useState } from 'react';

export function useCount(){
    const [count,setCount]=useState(0);
            const increment=()=>{
                setCount(c=>c+1)
            } 
            const decrement=()=>{
              setCount(c=> c>0 ? c-1 : c)
            }
         return {count,increment,decrement}   
  }