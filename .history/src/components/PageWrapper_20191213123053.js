import React, { Component } from "react";
import PropTypes from "prop-types";

class PageWrapper extends Component {
	static propTypes = {
		prop: PropTypes,
	};

	render() {
		return <div class='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'></div>;
	}
}
export default PageWrapper;
