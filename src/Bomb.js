// your Bomb code here!
import React from 'react';

  class Bomb extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state= {
    //         secondsLeft:120
    //     }
    // }

    state = {
        // secondsLeft:120
        secondsLeft: this.props.initialCount,
    }
        // render() {
        //     const {secondsLeft} = this.state
        //   return <h2>{secondsLeft} seconds left before I go boom!</h2>;
        // }


        render() {
            const secondsLeft = this.state.secondsLeft
            if (secondsLeft === 0){
                return <h2>Boom!</h2>;
            }
                return <h2>{secondsLeft} seconds left before I go boom!</h2>;
        }
    
        ComponentDidMount(){
            this.myInterval = setInterval(() => {
                this.setState({
                    secondsLeft: this.state.secondsLeft -1 
                })
            }, 1000);
            
        }
      }


  export default Bomb