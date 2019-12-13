import React, { Component } from "react";
import Header from "../Common/Header";

class Home extends Component {
	render() {
		return (
			<div>
				<Header
					title='Welcome To Our Studio!'
					subtitle="IT'S NICE TO MEET YOU"
					buttonText='Tell me more'
					showButton={true}
					link='/services'
					image='/img/map-image.png'
				/>
			</div>
		);
	}
}
export default Home;
