// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount,
        }
    }   

    // func = () => {
    //     if (this.state.secondsLeft == 0) {
    //         <div>Boom!</div>
    //     }else {
    //         <div className='bb'>{this.state.secondsLeft} seconds left before I go boom!</div>
    //     }
    // }
    render() {
        let func = this.state.secondsLeft === 0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
        <div className='bb'>{func}</div>
        )
    }

}