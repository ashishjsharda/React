import React from 'react'
class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                header:"Sample App using State",
            footer:"General Footer"
        }
    }

    render(){
        return(

                <div>
            <h1>{this.state.header}</h1>
            <h1>{this.state.footer}</h1>
            </div>
        );

    }
}

export default App;
