import React from 'react';
class App extends React.Component{
  render()
  {
    return(
<div>
<h1>{this.props.headerProp} </h1>
<h1>{this.props.contentProp} </h1>
</div>
    );
  }
}

App.defaultProps={
  headerProp:"Header from Props",
  contentProp:"Content from Props",
}
export default App;
