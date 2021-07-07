// your Bomb code here!
import React, {Component} from 'react';

 class Bomb extends Component{
  constructor(props) {
  super(props)
  this.state = {
    secondsLeft: this.props.initialCount
  }
}
  Gone = () =>{
    if(this.state.secondsLeft == 0){
      return (<h1>Boom!</h1>);
     
    }else{
    
       return (<h4>{this.state.secondsLeft} seconds left before I go boom!</h4>);
    }
  }
  render(){
    return(
      <div>{this.Gone()}</div>
    );
  }
}
export default Bomb;