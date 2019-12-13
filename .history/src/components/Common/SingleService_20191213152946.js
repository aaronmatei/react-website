import React, { Component } from "react";

class SingleService extends Component {
	render() {
		return (
			<div class='col-md-4'>
				<span class='fa-stack fa-4x'>
					<i class='fas fa-circle fa-stack-2x text-primary'></i>
					<i class='fas fa-lock fa-stack-1x fa-inverse'></i>
				</span>
				<h4 class='service-heading'>{this.props.serviceHeading}Web Security</h4>
				<p class='text-muted'>
					{this.props.ServiceText}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
					inventore harum ex magni, dicta impedit.
				</p>
			</div>
		);
	}
}
export default SingleService;
