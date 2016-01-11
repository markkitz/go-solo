import React, { Component, PropTypes } from 'react'
import FormField from './FormField.js'

export default class TextInput extends Component{
	render() {
			let {label, name, value, onChange, onBlur} = this.props;
			const handleBlur = (e) => {
				onBlur(e);
			}

		return(
			<FormField label={label}>
				<input type="text" name={name} value={value} onChange={ (e) => {onChange(e.target.name, e.target.value) }} onBlur = {handleBlur} />
			</FormField>
			);
	}
}
TextInput.protoTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};
