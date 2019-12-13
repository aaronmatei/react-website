import React, { Component } from "react";
import SingleService from "./SingleService";

class Services extends Component {
	render() {
		return (
			<section class='page-section' id='services'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-12 text-center'>
							<h2 class='section-heading text-uppercase'>Services</h2>
							<h3 class='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div>
					<div class='row text-center'>
						<SingleService serviceHeading='E-commerce' serviceText='' />
						<SingleService serviceHeading='Responsive Web Design' />
						<SingleService serviceHeading='Cyber Security' />
					</div>
				</div>
			</section>
		);
	}
}
export default Services;
