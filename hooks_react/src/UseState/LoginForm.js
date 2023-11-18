import React, { useState } from 'react'


export  function LoginFormA() {
    const [email,setEmail]=useState(''); // we dont type React.useState ==> cause we already declared above there.
    const [password,setPassword]=useState(''); 
     function handelEmail(e){   // must type function 
        setEmail(e.target.value)
    }
     function handelPassword(e){   // must type function 
        setPassword(e.target.value)
    }
  return (
    <div>
       <h1>function example</h1> 
       <input value={email} onChange={handelEmail} placeholder='Email ...'/> <br></br>
       <input type='password' value={password} onChange={handelPassword} placeholder='Password ...'/>


    </div>
  )
}

export class LoginFormB extends React.Component {
    state={
        email:'',
        password:''
    }
   handelEmail=(e)=>{  // not type function or const cause we in class component
        this.setState({
                email:e.target.value
        })
    };
   handelPassword=(e)=>{  // not type function or const cause we in class component
        this.setState({
                password:e.target.value
        })
    };
  render() {
    return (
      <div>
        <h1>Class example</h1>
        <input value={this.state.email} onChange={this.handelEmail} placeholder='Email ...'/> <br></br>
        <input type='password' value={this.state.password} onChange={this.handelPassword} placeholder='password ...'/>
      </div>
    )
  }
}
