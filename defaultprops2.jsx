import React, { Component } from 'react';
import './App.css';

class defaultpropstest extends React.Component {
  render()
  {
    return(
  <div>
<h1>Hello World</h1>
<h3>{this.props.header}</h3>
<h3>{this.props.content}</h3>
  </div>

    );
  }
}

defaultpropstest.defaultProps={
  header:"This is from header",
  content:"This is from content"
}
export default defaultpropstest;
