import React, {Component} from 'react';
import './Counter.css';
import PropTypes from 'prop-types'
import CounterButton from './CounterButton';
export default class Counter extends Component{

  constructor(){
    super()
    this.state = {
      maincounter : 0
    }
    this.increment = this.increment.bind(this)
    this.reset = this.reset.bind(this)
    this.decrement = this.decrement.bind(this)
  }
    render(){
      return (
        <div className="counterAppMain">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={3} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <span className="count">{this.state.maincounter}</span>
            <div>
            <button className= "resetButton" onClick={this.reset}>Reset</button>
            </div>
        </div>
      );
    }

    reset(){
      this.setState({
        maincounter : 0
      });
    }
    increment(by) {
      this.setState(
        (prevState) =>
        {
        return {maincounter : prevState.maincounter + by}
        }
      );
      console.log('Counter Main is called - ${by}');
    } 

    decrement(by) {
      this.setState(
        (prevState) =>
        {
        return {maincounter : prevState.maincounter - by}
        }
      );
      console.log('Counter Main is called - ${by}');
    } 

  }
