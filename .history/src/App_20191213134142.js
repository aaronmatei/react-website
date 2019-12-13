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
					<Route
						path='/about'
						render={() => {
							return <h1>I am about /route</h1>;
						}}
					/>
				</PageWrapper>
			</Router>
		);
	}
}

export default App;
