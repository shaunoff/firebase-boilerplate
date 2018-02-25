import React, { Component } from 'react';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(evt,val){
		this.setState({[val]: evt.target.value})
	}
	handleSubmit(evt,val){
		
	}
	render() {
		return (
			<div>
				<input onChange={(evt)=>this.handleChange(evt,'firstName')} name="firstName"></input>
				<input onChange={(evt)=>this.handleChange(evt,'lastName')} name="lastName"></input>
				<input onChange={(evt)=>this.handleChange(evt,'email')} name="email"></input>
				<input onChange={(evt)=>this.handleChange(evt,'password')} name="password"></input>
				<button onClick={()=>this.handleSubmit()}>Submit</button>
			</div>
		);
	}

}

export default SignUp;
