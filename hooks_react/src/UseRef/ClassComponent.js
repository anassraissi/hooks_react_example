
import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent';

export default class ClassComponent extends Component {
    constructor(){
            super();  // get methode and class from parent class called in this case "Component" => work with extend phrase above
            this.inputRef=React.createRef();
    }
     run=()=>{
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
        <h1>hi anass i'm here </h1>
        <input ref={this.inputRef}></input>
        <button onClick={this.run}>click here to focus the input</button>
        <hr></hr>
        <FunctionComponent></FunctionComponent>
      </div>
    )
  }
}
