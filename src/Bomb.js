// your Bomb code here!
import React, { Component } from 'react'

export class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
           secondsLeft : props.initialCount
        }
    }

    timer() {
        this.myInterval = setInterval(() => {
            this.setState(prevState =>({
                secondsLeft : prevState.secondsLeft - 1,
            }))
        }, 1000);
     
    }

    timerClear(){
        clearInterval(this.myInterval);
    }


    render() {
        let isFlag;
        if(this.state.secondsLeft > 0){
            isFlag =  `${this.state.secondsLeft} seconds left before I go boom!`
        }else{
            isFlag = `Boom!`
        }
        return (
            <div>
              {isFlag}
            </div>
        )
    }
}


export default Bomb
