import React, { Component } from 'react';
import './App.css';

class ForceUpdates extends Component{
  constructor()
  {
    super();
    this.forceUpdateHandler=this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler()
  {
    this.forceUpdate();
  }
  render()  {
    return(

<div>
<button onClick={this.forceUpdateHandler} >ForceUpdate</button>>
<h3> Random Number is {Math.random()}</h3>
</div>

    );
  }
}


export default ForceUpdates;
