import React, { useCallback, useState } from 'react'
import Button from  './Button'

const App = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count=>count+1);
    }
    const incrementCallBack=useCallback(increment,[]);
  return (
    <div>
    count : {count}
        <Button Onclick={incrementCallBack}>
            change color when loadpage
        </Button>
</div>  )
}

// class AppClass extends React.Component{
//     state={
//         count:0
//     }
//       increment=()=> {  // create function here for not change color of button when clicked  cause de render state when changed
//         this.setState({count:this.state.count+1})  
//     }
//     render(){
//         return (
//             <div>
//               count : {this.state.count}
//                   <Button Onclick={this.increment}>
//                       change color when loadpage
//                   </Button>
//           </div>
//         )
//     }
// }

export default App