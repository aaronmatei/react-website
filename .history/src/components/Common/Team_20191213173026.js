import React, { Component } from "react";
const members = [
	{
		image: "img/team/1.jpg",
		name: "Kay Garland",
		title: "Lead Designer",
		twitter: "www.twitter.com",
		facebook: "www.facebook.com",
		linkedin: "www.linkedin.com",
		youtube: "www.facebook.com",
		github: "www.github.com",
	},
	{
		image: "img/team/2.jpg",
		name: "Larry Parker",
		title: "Lead Marketer",
		twitter: "www.twitter.com",
		facebook: "www.facebook.com",
		linkedin: "www.linkedin.com",
		youtube: "www.facebook.com",
		github: "www.github.com",
	},
	{
		image: "img/team/3.jpg",
		name: "Kay Garland",
		title: "Lead Designer",
		twitter: "www.twitter.com",
		facebook: "www.facebook.com",
		linkedin: "www.linkedin.com",
		youtube: "www.facebook.com",
		github: "www.github.com",
	},
];

class Team extends Component {
	render() {
		return (
			<section className='bg-light page-section' id='team'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<h2 className='section-heading text-uppercase'>Our Amazing Team</h2>
							<h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div>
					<div className='row'>
						
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-8 mx-auto text-center'>
							<p className='large text-muted'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam
								veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Team;
