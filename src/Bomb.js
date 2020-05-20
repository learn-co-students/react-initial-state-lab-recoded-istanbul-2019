import React, { Component } from "react"

export default class ImageSlider extends Component{
  constructor(props){
    super();
    this.state={
        secondsLeft: props.initialCount
    }
  }

  render(){

      if(this.state.secondsLeft!==0){
        return (<div className="wrapper">
          {this.state.secondsLeft} seconds left before I go boom!
        </div>)
      }
      else{
        return (<div className="wrapper">Boom!</div>)
      }


  }


}
