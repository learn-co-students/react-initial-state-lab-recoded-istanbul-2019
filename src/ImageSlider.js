// your ImageSlider code here!
import React from 'react';


  class ImageSlider extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state= {
    //     currentSlideIndex :0
    //     }
    // }
    state = {
        currentSlideIndex :0  
    }
    render() {
        // const CURRENT_SLIDE = this.state.currentSlideIndex
      return <h2>I am on slide {this.state.currentSlideIndex}</h2>;
    }


}


//   class Bomb extends React.Component {
//     render() {
//       return <h2>I am on slide 0</h2>;
//     }
//   }



  export default ImageSlider