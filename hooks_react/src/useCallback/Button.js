import React from 'react'
const randomColor=()=> 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';


const Button = (props) => {
  return (
    <div>
        <button style={{backgroundColor:randomColor()}}>
                {props.children}    
        </button>    

    </div>
  )
}

export default Button