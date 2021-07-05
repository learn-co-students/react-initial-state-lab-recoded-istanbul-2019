import React, { Component } from "react"

export default class ImageSlider extends Component{
  constructor(props){
    super();
    this.state={
      currentSlideIndex: 0
    }
    let increment = () => {
      let newSlideIndex = this.state.currentSlideIndex +1;
      this.setState({
        currentSlideIndex: newSlideIndex
      })
    }
  }

  render(){
    return (
      <div className="wrapper">I am on slide {this.state.currentSlideIndex}</div>
    )
  }


}
