import React from 'react'
import Button from  './Button'

class App extends React.Component{
    state={
        count:0
    }
      increment=()=> {  // create function here for not change color of button when clicked  cause de render state when changed
        this.setState({count:this.state.count+1})  
    }
    render(){
        return (
            <div>
              count : {this.state.count}
                  <Button Onclick={this.increment}>
                      change color when loadpage
                  </Button>
          </div>
        )
    }
}

export default App