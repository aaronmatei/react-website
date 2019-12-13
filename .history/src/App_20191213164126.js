import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";

class App extends Component {
	render() {
		return (
			<Router>
				<PageWrapper>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/services' component={Home} />
					<Route exact path='/portfolio' component={About} />
				</PageWrapper>
			</Router>
		);
	}
}

export default App;
