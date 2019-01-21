import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mount:true
    }
    this.mountCounter = () => {this.setState({mount:true})}
    this.unMountCounter = () => {this.setState({mount:false})}
  }
  render() {
    console.log('In App.js render')
    return (
      <div>
        <button 
          onClick={this.mountCounter} 
          className="btn"
          // disabled = {this.state.mount}
        >
          Mount
        </button>
        <button 
          onClick={this.unMountCounter} 
          className="btn"
          // disabled = {this.state.mount}
        >
          Unmount
        </button>

        {this.state.mount ? <Counter/> : null}

      </div>
    );
  }
}
export default App;
