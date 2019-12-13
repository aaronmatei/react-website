import React, { Component } from "react";
import { withFormik } from "formik";
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
	submitForm = e => {
		e.preventDefault();
		alert("Message received...Thanks for your time");
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
									{fields.sections.map((section, sectionIndex) => {
										return (
											<div className='col-md-6' key={sectionIndex}>
												{section.map((field, index) => {
													return (
														<Field
															{...field}
															key={index}
															name={field.name}
															value={this.props.values[field.name]}
														/>
													);
												})}
											</div>
										);
									})}

									<div className='col-lg-12 text-center'>
										<div id='success'></div>
										<button
											id='sendMessageButton'
											className='btn btn-primary btn-xl text-uppercase'
											type='submit'
											onClick={e => this.submitForm}
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
export default withFormik({
	mapPropsToValues: () => ({
		name: "",
		email: "",
		phone: "",
		message: "",
	}),
	validate: values => {
		const errors = {};
		Object.keys(values).map(v => {
			if (!values[v]) {
				errors[v] = "Required";
			}
		});
		return errors;
	},
	handleSubmit: (values, { setSubmitting }) => {
		alert("Form submitted");
	},
})(Contact);
