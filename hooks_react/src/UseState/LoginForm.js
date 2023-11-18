import React, { useState } from 'react'


export  function LoginFormA() {
    const [email,setEmail]=useState(''); // we dont type React.useState ==> cause we already declared above there.
     function handelEmail(e){   // must type function 
        setEmail(e.target.value)
    }
  return (
    <div>
       <h1>function example</h1> 
       <input value={email} onChange={handelEmail}/>


    </div>
  )
}

export class LoginFormB extends React.Component {
    state={
        email:''
    }
   handelEmail=(e)=>{
        this.setState({
                email:e.target.value
        })
    };
  render() {
    return (
      <div>
        <h1>Class example</h1>
        <input value={this.state.email} onChange={this.handelEmail}/>
      </div>
    )
  }
}
