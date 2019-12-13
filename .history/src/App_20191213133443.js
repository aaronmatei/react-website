import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";

class App extends Component {
	render() {
		return (
			<Router>
				<PageWrapper>
					<Route path='/' component={Home} />
					<Route path='/' component={Home} />
					<Route path='/' component={Home} />
					<Route path='/' component={Home} />
					<Route path='/' component={Home} />
				</PageWrapper>
			</Router>
		);
	}
}

export default App;
