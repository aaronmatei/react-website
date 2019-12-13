import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";

class App extends Component {
	render() {
		return (
			<PageWrapper>
				<Router>
					<Route path='/home' component={Home} />
				</Router>
				<Home />
			</PageWrapper>
		);
	}
}

export default App;
