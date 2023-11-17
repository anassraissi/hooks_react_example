import React, { useEffect, useState } from 'react'

const FunctionComponent = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const usernameRef=React.createRef();
    const passwordRef=React.createRef();
    const saveRef=React.createRef();
    const show =()=>{
        console.log({username,password})
    }
    useEffect(()=>{
        usernameRef.current.focus();
    },[])
    const OnFirstInput=(e)=>{
        if (e.code=="Enter"){
            passwordRef.current.focus();
        }
    }
    const OnLastInput=(e)=>{
        if (e.code=="Enter"){
            saveRef.current.focus();
        } 
    }
  return (
    <div>
        <input ref={usernameRef} placeholder='username ..' onKeyDown={OnFirstInput} onChange={(e)=>setUsername(e.target.value)}></input>
        <input ref={passwordRef} onKeyDown={OnLastInput} placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
        <button  ref={saveRef} onClick={show}>save</button>
    </div>
  )
}

export default FunctionComponent