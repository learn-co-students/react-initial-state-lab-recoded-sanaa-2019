// your Bomb code here!
import React, { Component } from 'react'

export class Bomb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            secondsLeft:this.props.initialCount
        }
    }
    counter=()=>{
    if(this.state.secondsLeft>0){
        return this.state.secondsLeft+" seconds left before I go boom!"
    }
else return "Boom!"}
    render() {
        return (
            <div>
               {this.counter()} 
            </div>
        )
    }
}

export default Bomb
