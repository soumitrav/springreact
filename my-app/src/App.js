import React, { Component } from 'react';
import FirstComponent, { First1 } from './components/learning-examples/FirstComponet'
import SecondComponent from './components/learning-examples/SecondC'
import ThirdComponent from './components/learning-examples/ThirdC'
import Counter from './components/counter/Counter'
import ToDoAppComponent from './components/todo/ToDoApp'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {/*<Counter></Counter>*/}
    <ToDoAppComponent></ToDoAppComponent>
    </div>
  );
}

class LearningComponent extends Component{
  render(){
    return (
      <div className="LearningComponent">
      Hello world React
      <FirstComponent></FirstComponent>
      <First1></First1>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
