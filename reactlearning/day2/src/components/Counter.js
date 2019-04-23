import React, {Component} from 'react';
//creating a state is roughly 90% of React; storing and using values and data in local memory

export class Counter extends Component {
  constructor() {
    super()
    this.state = { //this.state is a mandatory syntax
      count: 0 //state is taking in count, initial value of 0
    }
    // this.incrementCounter = this.incrementCounter.bind(this)
    //old way of calling this into other functions outside the constructor but inside the class
  }
incrementCounter = ()=>{
  console.log(this)
  this.setState({
    count: this.state.count+1
  })
}
/*  incrementCounter() { //JSX/ES6 does not require you to type function to define the function
    //this.state.count = this.state.count+1 :: this does not work because state is immutable
    //you cannot change the state by assigning it new values
    //must use this.setState
    this.setState({
      count: this.state.count + 1
    })

  }*/
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.incrementCounter}>Increment</button>
      </div>
    ) //NOTE: this refers to the class you are working inside of
  }
}
