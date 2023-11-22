import React, { useEffect, useState } from "react"

export const AuthContext=React.createContext();
export default function AuthProvider(props){
    const [auth,setAuth]=useState({
        // email:'ss'
    });
    useEffect(()=>{   // nhaydo lmochkil dyal load page ymchi dashboard l login hit maghay3rafch auth wach 3amra 
        const token= localStorage.getItem('token');
        const email= localStorage.getItem('email');

        setAuth({ token,email})
    },[])  // [] bach yakhdam ghi lmara lawla wyhbas. 
    return(
        <AuthContext.Provider value={{auth,setAuth}} >
            {props.children}
        </AuthContext.Provider>
    )
}