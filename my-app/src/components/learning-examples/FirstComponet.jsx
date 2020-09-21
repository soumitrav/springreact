import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class FirstComponent extends Component{
  render(){
    return (
      <div className="fComponent">
        Hello first Component
      </div>
    );
  }
}

export function First1(){
  return (
    <div className="firstFunction">
      this is firstFunction component
    </div>
  );
}