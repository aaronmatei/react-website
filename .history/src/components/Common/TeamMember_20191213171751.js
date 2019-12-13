import React, { Component } from "react";

class TeamMember extends Component {
	render() {
		return (
			<div className='col-sm-4'>
				<div className='team-member'>
					<img className='mx-auto rounded-circle' src='img/team/1.jpg' alt='' />
					<h4>Kay Garland</h4>
					<p className='text-muted'>Lead Designer</p>
					<ul className='list-inline social-buttons'>
						<li className='list-inline-item'>
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='#'>
								<i className='fab fa-facebook-f'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='#'>
								<i className='fab fa-linkedin-in'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='#'>
								<i className='fab fa-instagram'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='#'>
								<i className='fab fa-youtube'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default TeamMember;
