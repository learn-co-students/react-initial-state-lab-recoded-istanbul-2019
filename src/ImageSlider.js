import React, { Component } from "react";

// your ImageSlider code here!
export default class ImageSlider extends Component {

    constructor(props) {
        super()
        this.state = {
            currentSlideIndex: 0,
        }
    }   

    render() {
        return (
            <div className='basil'>I am on slide {this.state.currentSlideIndex}</div>
        )
    }

}
// // export defaultclass ImageSlider extends Component {
 
// //     // we use the constructor to set the INITIAL STATE
// //     constructor() {
// //       super()
// //       this.state = {
// //         count: 0
// //       }
// //     }
   
// //     render() {
// //       return (
// //         <div>
// //           {this.state.count}
// //         </div>
// //       )
// //     }
// //   }


  
