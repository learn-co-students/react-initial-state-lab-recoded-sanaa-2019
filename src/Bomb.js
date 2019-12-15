
import  React, { Component }  from 'react';



class ImageSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft:props.initialCount
        }}


render(){
    return(
        <div>
            {
                this.bomber()
            }
      </div>
    )
}



bomber(){
    if(this.state.secondsLeft>0){
        return`${this.state.secondsLeft} seconds left before I go boom!`

    }
    else if (this.state.secondsLeft===0){
        return'Boom!'
    }
}
}

export default ImageSlider;