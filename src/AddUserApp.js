import React, { Component } from "react";
import Form from './AddUserForm';

class AddUser extends Component{

	state={
		fields: {}
	};

	onSubmit= fields => {
		this.setState({ fields })
	};

	render(){
	return (

		<div className="App">
			<Form onSubmit={fields => this.onSubmit(fields)} />
			<p>
				{JSON.stringify(this.state.fields,null,2)}
			</p>
		</div>

	);
	}
}

export default AddUser;