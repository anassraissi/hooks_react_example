import React, { useMemo, useState } from 'react'

const App = () => {
  const randomColor=()=> 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';

    const [username,setUsername]=useState("");
    const [profession,setPrefession]=useState("");
    const [age,setAge]=useState(0);

    const fullName =useMemo(()=>(
       <div style={{color:randomColor()}}>{username} {profession}</div> 

    ),[username,profession])
  return (
    <div>
        fullName : {fullName} <br/>
        Age : {age} <br/>
        <input placeholder='username..' onChange={e=>setUsername(e.target.value)}></input>
        <input placeholder='profession..' onChange={e=>setPrefession(e.target.value)}></input>
        <input placeholder='age..' onChange={e=>setAge(e.target.value)}></input>
    

    </div>
  )
}

export default App