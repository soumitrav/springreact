import React, {Component} from 'react';
import './Counter.css';
import PropTypes from 'prop-types'
export default class CounterButton extends Component{
  constructor(){
    super()
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
    render(){
      const style = {fontSize : "40px", padding : "30px 30px"}
      return (
        <div className="counter">
          <button onClick={() => {this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button>
          <button onClick={() => {this.props.decrementMethod(this.props.by)}}>-{this.props.by}</button>
          {/*<span className="count">{this.state.counter}</span>*/}
        </div>
      );
    }
   increment() { // Arrow function is increament = () => {} with arrow function no need to bind the function
     this.setState(
        (prevState) => {
         return {counter : prevState.counter + this.props.by}
        }
     );
     console.log("CounterButton children is called");
     this.props.incrementMethod(this.props.by);
   } 

   decrement() { // Arrow function is increament = () => {} with arrow function no need to bind the function
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + this.props.by}
            }
        );
        console.log("CounterButton children is called");
        this.props.decrementMethod(this.props.by);
    } 
  }

  CounterButton.defaultProps = {
    by : 1
  }

  CounterButton.propTypes = {
    by : PropTypes.number
  }
