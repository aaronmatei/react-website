import React, { Component } from "react";
import SingleService from "./SingleService";
const services = [{ serviceHeading: "E-commerce" }];

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
						<SingleService
							icon='fa-lock'
							serviceHeading='E-commerce'
							serviceText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti aut eligendi quas suscipit dolorum est ipsum corrupti quaerat earum? Minus omnis veniam, autem quae necessitatibus officiis illo sit quibusdam.'
						/>
						<SingleService
							icon='fa-lock'
							serviceHeading='Responsive Web Design'
							serviceText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti aut eligendi quas suscipit dolorum est ipsum corrupti quaerat earum? Minus omnis veniam, autem quae necessitatibus officiis illo sit quibusdam.'
						/>
						<SingleService
							icon='fa-lock'
							serviceHeading='Web Security'
							serviceText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti aut eligendi quas suscipit dolorum est ipsum corrupti quaerat earum? Minus omnis veniam, autem quae necessitatibus officiis illo sit quibusdam.'
						/>
					</div>
				</div>
			</section>
		);
	}
}
export default Services;
