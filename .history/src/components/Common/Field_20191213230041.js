import React, { Component } from "react";

class Field extends Component {
	render() {
		return (
			<div className='form-group'>
				{this.props.elementName === "input" ? (
					<input
						className='form-control'
						id={this.props.name}
						type={this.props.type}
						placeholder={this.props.placeholder}
						required='required'
						data-validation-required-message='Please enter a valid value.'
						name={this.props.name}
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
					/>
				) : (
					<textarea
						className='form-control'
						id={this.props.name}
						type={this.props.type}
						placeholder={this.props.placeholder}
						required='required'
						data-validation-required-message='Please enter a message.'
						name={this.props.name}
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
					></textarea>
				)}
				<p className='help-block text-danger'></p>
			</div>
		);
	}
}
export default Field;
