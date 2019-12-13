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
