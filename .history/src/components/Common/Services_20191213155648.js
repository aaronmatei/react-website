import React, { Component } from "react";
import SingleService from "./SingleService";
const services = [
	{
		serviceHeading: "E-commerce",
		icon: "fa-shopping-cart",
		serviceText:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa doloribus reiciendis consequuntur consectetur et, deserunt debitis maiores ullam nihil voluptatibus dolore eos assumenda ipsum placeat dolorem reprehenderit mollitia? Numquam?",
	},
	{
		serviceHeading: "Responsive Web Design",
		icon: "fa-laptop",
		serviceText:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa doloribus reiciendis consequuntur consectetur et, deserunt debitis maiores ullam nihil voluptatibus dolore eos assumenda ipsum placeat dolorem reprehenderit mollitia? Numquam?",
	},
	{
		serviceHeading: "Web Security",
		icon: "fa-lock",
		serviceText:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa doloribus reiciendis consequuntur consectetur et, deserunt debitis maiores ullam nihil voluptatibus dolore eos assumenda ipsum placeat dolorem reprehenderit mollitia? Numquam?",
	},
];

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
						{services.map((service, idx) => {
							return <SingleService {...service} key={idx} />;
						})}
					</div>
				</div>
			</section>
		);
	}
}
export default Services;
