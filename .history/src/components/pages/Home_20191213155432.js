import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
// reusable components
import Services from "../Common/Services";

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
					image={image}
				/>
				<Services />
			</div>
		);
	}
}
export default Home;
