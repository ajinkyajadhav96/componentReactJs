import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: 0
    }

    this.increment = () => this.setState({data: this.state.data + 1})
    this.decrement = () => this.setState({data: this.state.data - 1})
  };
  
  render() {
    console.log('In Counter render')
    return (
      <div>
        <div className="counter">
          Counter: {this.state.data}
        </div>
      <button onClick={this.increment} className="btn">Increment</button>
      <button onClick={this.decrement} className="btn">Decrement</button>
      </div>
    );
  }

  componentWillMount(){
    console.log('Component Will Mount')
  }
  componentDidMount(){
      console.log('Component Did Mount')
  }
  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('Component Did Update')
  }

  componentWillUnmount(){
      console.log('Component Will Unmount')
  }
}

export default Counter;
