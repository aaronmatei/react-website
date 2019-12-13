import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about.jpg";
import Timeline from "../Common/Timeline";

class About extends Component {
	render() {
		return (
			<div>
				<Header
					title='About us!'
					subtitle="it's really a great story"
					buttonText='Get to know us more'
					showButton={false}
					image={image}
				/>
				<section className='page-section' id='about'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12 text-center'>
								<h2 className='section-heading text-uppercase'>About</h2>
								<h3 className='section-subheading text-muted'>
									Lorem ipsum dolor sit amet consectetur.
								</h3>
							</div>
						</div>
						<div className='row'>
							<Timeline />
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default About;
