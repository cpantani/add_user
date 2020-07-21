import React, { Component } from "react";

export default class Form extends React.Component {
		state= {
			firstName:'',
			lastName:'',
			username:'',
			email:'',
			password:'',};


	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state)
		this.setState({
			firstName:'',
			lastName:'',
			username:'',
			email:'',
			password:'',})
	}


	render() {
		return (
			<form>
				<input
					name="firstName"
					placeholder="first name"
					value={this.state.firstName}
					onChange={e => this.change(e)}
				/>
				<input
					name="lastName"
					placeholder="lastName"
					value={this.state.lastName}
					onChange={e => this.change(e)}
				/>
				<input
					name="username"
					placeholder="username"
					value={this.state.username}
					onChange={e => this.change(e)}
				/>
					<input
					name="email"
					placeholder="email"
					value={this.state.email}
					onChange={e => this.change(e)}
				/>
					<input
					name="password"
					placeholder="password"
					value={this.state.password}
					onChange={e => this.change(e)}
				/>

				<button onClick={e => this.onSubmit(e)}> Submit </button>
			</form>
		)
	}
}
