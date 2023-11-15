import React, { useReducer } from 'react'

//use init 
function init(state) {
        return {
            count : state
        }
}
function countReducer(state,action){
        if(action=="increment"){
            return state +1;
        }
        if(action=='decrement'){
            if(state==0){
                return state
            }
            else{ return state -1;}
         
        }
        // if(action=="reset"){
        //     return 0;
        // }
        
        //use init
        if(action=="reset"){
             return init(0)
        }
        // as object
        if(action.type=="object"){
            return state +action.payload;
        }
        //as complex
        if(action.type=="complex"){
            return {count: state.count + action.payload}
        }
        throw new Error(action + " is not defined in count reducer");
 
}
//dispatch send parametre called action
const App = () => {

    // const [Count,dispatch]=useReducer(countReducer,0);
    //complex state
    // const [state,dispatch]=useReducer(countReducer,0,init);

    // use init for make reset by parametre
    const [state,dispatch]=useReducer(countReducer,0,init);   

    return (
    <div style={{backgroundColor:'green'}}>
            {/* Count : {count}  */}
            Count : {state.count} 
            {/* <br></br> 
            <button onClick={()=>dispatch('increment')} >Increment</button> 
            <button onClick={()=>dispatch('decrement')} >Decrement</button>
            <button onClick={()=>dispatch('reset')} >reset</button>
            <p>parametre as object</p>
            <button onClick={()=>dispatch({type:'object',payload:10})} >move by 10 </button> */}
            <p>more complex for count</p>
            <button onClick={()=>dispatch({type:'complex',payload:20})} >move by 20 </button>
            <button onClick={()=>dispatch('reset')} >reset</button>
            

    </div>
  )
}

export default App