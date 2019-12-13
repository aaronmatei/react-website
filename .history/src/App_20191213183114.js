import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// common
import Services from "./components/Common/Services";
import Portfolio from "./components/Common/Portfolio";
import Team from "./components/Common/Team";

import Contact from "./components/pages/Contact";

class App extends Component {
	render() {
		return (
			<Router>
				<PageWrapper>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/services' component={Services} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/team' component={Team} />
					<Route exact path='/contact' component={Contact} />
				</PageWrapper>
			</Router>
		);
	}
}

export default App;
