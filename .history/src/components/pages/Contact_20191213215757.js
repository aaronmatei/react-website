import React, { Component } from "react";
import Field from "../Common/Field";
const fields = {
	sections: [
		[
			{ name: "name", elementName: "input", type: "text", placeholder: "Your Name*" },
			{ name: "email", elementName: "input", type: "email", placeholder: "Your Email*" },
			{ name: "phone", elementName: "input", type: "text", placeholder: "Your Phone numbers*" },
		],
		[{ name: "message", elementName: "textarea", type: "text", placeholder: "Type your message*" }],
	],
};

class Contact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		message: "",
	};
	render() {
		return (
			<section className='page-section' id='contact'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<h2 className='section-heading text-uppercase'>Contact Us</h2>
							<h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<form id='contactForm' name='sentMessage' novalidate='novalidate'>
								<div className='row'>
									<div className='col-md-6'></div>
									<div className='col-md-6'>
										<div className='form-group'>
											<textarea
												className='form-control'
												id='message'
												placeholder='Your Message *'
												required='required'
												data-validation-required-message='Please enter a message.'
												value={this.state.message}
												onChange={e => this.setState({ message: e.target.value })}
											></textarea>
											<p className='help-block text-danger'></p>
										</div>
									</div>
									<div className='clearfix'></div>
									<div className='col-lg-12 text-center'>
										<div id='success'></div>
										<button
											id='sendMessageButton'
											className='btn btn-primary btn-xl text-uppercase'
											type='submit'
										>
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Contact;
