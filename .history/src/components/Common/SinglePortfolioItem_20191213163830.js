import React, { Component } from "react";
import { Link } from "react-router-dom";

class SinglePortfolioItem extends Component {
	render() {
		return (
			<div className='col-md-4 col-sm-6 portfolio-item'>
				<Link className='portfolio-link' data-toggle='modal' to={this.props.link}>
					<div className='portfolio-hover'>
						<div className='portfolio-hover-content'>
							<i className='fas fa-plus fa-3x'></i>
						</div>
					</div>
					<img className='img-fluid' src={image} alt='' />
				</Link>
				<div className='portfolio-caption'>
					<h4>{this.props.head}Threads</h4>
					<p className='text-muted'>{this.props.description}Illustration</p>
				</div>
			</div>
		);
	}
}
export default SinglePortfolioItem;
