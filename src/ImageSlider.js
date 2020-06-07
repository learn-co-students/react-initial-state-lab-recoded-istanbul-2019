// your ImageSlider code here!


import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor(props){
        super();
        this.state={currentSlideIndex: 0}
    }

    render() {
        return (
            <div>
            <p>I am on slide</p> {this.state.currentSlideIndex}
            </div>
        )
    }
}
