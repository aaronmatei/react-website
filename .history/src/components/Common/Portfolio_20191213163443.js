import React, { Component } from "react";
const portfolios = [
	{ link: "#portfolioModal1", image: "img/portfolio/01-thumbnail.jpg", head: "Threads", description: "Illustration" },
	{
		link: "#portfolioModal2",
		image: "img/portfolio/02-thumbnail.jpg",
		head: "Explore",
		description: "Graphic Design",
	},
	{ link: "#portfolioModal3", image: "img/portfolio/03-thumbnail.jpg", head: "Finish", description: "Identity" },
	{ link: "#portfolioModal4", image: "img/portfolio/04-thumbnail.jpg", head: "Lines", description: "Branding" },
	{
		link: "#portfolioModal5",
		image: "img/portfolio/05-thumbnail.jpg",
		head: "South West",
		description: "Illustration",
	},
	{ link: "#portfolioModal6", image: "img/portfolio/06-thumbnail.jpg", head: "Threads", description: "Illustration" },
];

class Portfolio extends Component {
	render() {
		return (
			<section className='bg-light page-section' id='portfolio'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<h2 className='section-heading text-uppercase'>Portfolio</h2>
							<h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-4 col-sm-6 portfolio-item'>
							<a className='portfolio-link' data-toggle='modal' href='#portfolioModal5'>
								<div className='portfolio-hover'>
									<div className='portfolio-hover-content'>
										<i className='fas fa-plus fa-3x'></i>
									</div>
								</div>
								<img className='img-fluid' src='img/portfolio/05-thumbnail.jpg' alt='' />
							</a>
							<div className='portfolio-caption'>
								<h4>Southwest</h4>
								<p className='text-muted'>Website Design</p>
							</div>
						</div>
						<div className='col-md-4 col-sm-6 portfolio-item'>
							<a className='portfolio-link' data-toggle='modal' href='#portfolioModal6'>
								<div className='portfolio-hover'>
									<div className='portfolio-hover-content'>
										<i className='fas fa-plus fa-3x'></i>
									</div>
								</div>
								<img className='img-fluid' src='img/portfolio/06-thumbnail.jpg' alt='' />
							</a>
							<div className='portfolio-caption'>
								<h4>Window</h4>
								<p className='text-muted'>Photography</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Portfolio;
