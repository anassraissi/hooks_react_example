import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
export default function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const authContext=useContext(AuthContext);
    const login=(e)=>{
        e.preventDefault();
        if(password==="123"){
          const token='abc';
          localStorage.setItem('password',password);
          localStorage.setItem('email',email);
          authContext.setAuth({token,email});
          console.log({email,password});

        }
        else{
            alert('wrong details');
        }
    }
  return (
    <div>
<section className=" text-center text-lg-start">

  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">

          <form>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" onChange={(e)=>setEmail(e.target.value)} />
              <label className="form-label" for="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" onChange={(e)=>setPassword(e.target.value)}/>
              <label className="form-label" for="form2Example2" >Password</label>
            </div>
            <button type="button" className="btn btn-primary btn-block mb-4" onClick={login}>LogIn</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
