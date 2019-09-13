import React, { Component } from 'react';
import './App.css';

class UsingState extends React.Component {

  constructor(props)
  {
    super(props)
    this.state={
      header:"This is from header",
      footer:"This is from footer"
    }
  }
  render()
  {
    return(
  <div>
<h1>Hello World</h1>
<h3>{this.state.header}</h3>
<h3>{this.state.footer}</h3>

  </div>

    );
  }
}


export default UsingState;
