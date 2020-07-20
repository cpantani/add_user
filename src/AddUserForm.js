import React from 'react';

export default class Form extends React.Component {
	state= {
		firstName:'',
		lastName:'',
		username:'',
		email:'',
		password:'',
	};

	change = e =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state)
		console.log(this.state);
	}


	render() {
		return(
		<form>
			<input name = "first name"
				   placeholder = "first name"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<input name = "last name"
				   placeholder = "last name"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<input name = "last name"
				   placeholder = "last name"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<input name = "username"
				   placeholder = "username"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<input name = "email"
				   placeholder = "email"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<input name = "password"
				   type = 'password'
				   placeholder = "password"
				   value ={this.state.firstName}
				   onChange={e => this.change(e)}
			/>
			<br />
			<button onClick={e => this.onSubmit(e)}>Submit</button>
		</form>
		);
	}

}