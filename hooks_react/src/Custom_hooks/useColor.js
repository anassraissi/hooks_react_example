import { useEffect, useState } from 'react';

const randomColor=()=> 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
export function useColor(){
  useEffect(()=>{
    function handelBackroundColor(){
      document.body.style.background=randomColor();
    }
    handelBackroundColor();
  },[])
}