import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class FindDOMNode extends Component{
  constructor()
  {
    super();
    this.findDomNodeHandler=this.findDomNodeHandler.bind(this);
  }
  findDomNodeHandler()
  {
    var mydiv=document.getElementById('mydiv');
    ReactDOM.findDOMNode(mydiv).style.color='green';
  }
  render()  {
    return(

<div>
<button onClick={this.findDomNodeHandler} >Find Dom Node Handler</button>>
<div id="mydiv"> This is sample text</div>
</div>

    );
  }
}


export default FindDOMNode;
