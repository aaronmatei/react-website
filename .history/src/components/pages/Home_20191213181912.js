import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
// reusable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Footer from "../Common/Footer";
import Contact from "./Contact";

class Home extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		message: "",
	};
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
				<Portfolio />
				<Team />
				<Contact />
				<Footer />
			</div>
		);
	}
}
export default Home;
