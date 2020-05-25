// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount,
    }
    render ()
    {
      let  secondsLeft = this.state.secondsLeft;
        if (secondsLeft === 0){
            return <h2>Boom!</h2>;
        }
    return <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
    }
}

export default Bomb;