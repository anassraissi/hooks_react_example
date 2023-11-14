import React from 'react'
const randomColor=()=> 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';


function Button(props){
  return (
    <div>
        <button onClick={props.Onclick} style={{backgroundColor:randomColor()}}>
                {props.children}    
        </button>  

    </div>
  )
}

export default React.memo(Button);