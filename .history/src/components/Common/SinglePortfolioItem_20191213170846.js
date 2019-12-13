import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class SinglePortfolioItem extends Component {
	render() {
		return (
			<Fragment>
				<div className='col-md-4 col-sm-6 portfolio-item'>
					<Link className='portfolio-link' data-toggle='modal' to={this.props.link}>
						<div className='portfolio-hover'>
							<div className='portfolio-hover-content'>
								<i className='fas fa-plus fa-3x'></i>
							</div>
						</div>
						<img className='img-fluid' src={this.props.image} alt='' />
					</Link>
					<div className='portfolio-caption'>
						<h4>{this.props.head}</h4>
						<p className='text-muted'>{this.props.description}</p>
					</div>
				</div>
				<div
					class='portfolio-modal modal fade'
					id='portfolioModal1'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/01-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Threads</li>
												<li>Category: Illustration</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class='portfolio-modal modal fade'
					id='portfolioModal2'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/02-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Explore</li>
												<li>Category: Graphic Design</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class='portfolio-modal modal fade'
					id='portfolioModal3'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/03-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Finish</li>
												<li>Category: Identity</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class='portfolio-modal modal fade'
					id='portfolioModal4'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/04-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Lines</li>
												<li>Category: Branding</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class='portfolio-modal modal fade'
					id='portfolioModal5'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/05-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Southwest</li>
												<li>Category: Website Design</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class='portfolio-modal modal fade'
					id='portfolioModal6'
					tabindex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div class='modal-dialog'>
						<div class='modal-content'>
							<div class='close-modal' data-dismiss='modal'>
								<div class='lr'>
									<div class='rl'></div>
								</div>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-8 mx-auto'>
										<div class='modal-body'>
											<h2 class='text-uppercase'>Project Name</h2>
											<p class='item-intro text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
											<img
												class='img-fluid d-block mx-auto'
												src='img/portfolio/06-full.jpg'
												alt=''
											/>
											<p>
												Use this area to describe your project. Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
												minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
												beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
											</p>
											<ul class='list-inline'>
												<li>Date: January 2017</li>
												<li>Client: Window</li>
												<li>Category: Photography</li>
											</ul>
											<button class='btn btn-primary' data-dismiss='modal' type='button'>
												<i class='fas fa-times'></i>
												Close Project
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default SinglePortfolioItem;