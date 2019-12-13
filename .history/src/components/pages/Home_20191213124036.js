import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div>
				<header class='masthead'>
					<div class='container'>
						<div class='intro-text'>
							<div class='intro-lead-in'>Welcome To Our Studio!</div>
							<div class='intro-heading text-uppercase'>It's Nice To Meet You</div>
							<a class='btn btn-primary btn-xl text-uppercase js-scroll-trigger' href='#services'>
								Tell Me More
							</a>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
export default Home;
