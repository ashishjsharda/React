import React from 'react';
class App extends React.Component {
	render() {
		return (
			<div>
				Header
				Footer
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1> Header </h1>
			</div>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div>
				<h1> Footer </h1>
			</div>
		);
	}
}

export default App;
