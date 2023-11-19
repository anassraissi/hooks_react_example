import React, { useEffect, useState } from 'react'


export  function LoginFormA() {
    const [email,setEmail]=useState(''); // we dont type React.useState ==> cause we already declared above there.
    const [password,setPassword]=useState(''); 
    //---------------------chargement dyal component ------------
    useEffect(()=>{
      console.log('FunctionComponents => chargemet dyal page');
      return(()=>{
        console.log('FunctionComponents => katlgha component dyal page'); // bhal if else il makanech component khdam bhadi.
      })
    },[])  // [] kangoliha mnin tabadal valeur li wast [] khadmi. fhal lhala ghatkhdam ghi mra wahda flawal. 

  //----------------------------componentDidUpdate dyal email------------------------

       
      useEffect(()=>{
       if (email ==""){   // mnin tcharga awal mara mykhdamch bhadi.
            return;
        }
        console.log('functionComponent => mnin tbadal email');
      },[email]) //mnin ytbadal email


                     //---------------------------componentDidUpdate dyal password----------------
            
            useEffect(()=>{
              if (password ==""){   // mnin tcharga awal mara mykhdamch bhadi.
                   return;
               }
               console.log('functionComponent => mnin tbadal password');
             },[password]) //mnin ytbadal email


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
       <input value={password} onChange={handelPassword} placeholder='Password ...'/>


    </div>
  )
}

export class LoginFormB extends React.Component {
    state={
        email:'',
        password:''
    }
        componentDidMount(){
          console.log('classComponent => chargemet dyal page');
        }
        //email exemple
        componentDidUpdate(prevProps,prevState){
          if(prevState.email !== this.state.email){

            console.log('classComponent => ila tbadlat email f component');
          }
          if(prevState.password !== this.password.email){

            console.log('classComponent => ila tbadlat password f component');
          }
          console.log('classComponent => ila tbadlat chi haja f component');

        }
        componentWillUnmount(){
        console.log('classComponent => mnin tatlgha l component');
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
        <input  value={this.state.password} onChange={this.handelPassword} placeholder='password ...'/>
      </div>
    )
  }
}
