import React, { Component } from 'react';
import './App.css';

class Prop extends Component{
  render()
  {
    return(

<div>
<h1>{this.props.header}</h1>
<h2>{this.props.footer}</h2>

</div>

    );
  }
}

Prop.defaultProps={
  header:"This is from header",
  footer:"This is from footer"
}
export default Prop;
