// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props){
        super()
        this.state ={
            secondsLeft : props.initialCount 
        }
    }

    bomber(){
        if(this.state.secondsLeft > 0){
            return '120 seconds left before I go boom!'

        }else if(this.state.secondsLeft === 0){
            return 'Boom!'

        }
    }

    render() {
        return (
            <div>
                {this.bomber()}
            </div>
        )
    }
}
