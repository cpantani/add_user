import React,{ Component, useState } from "react";

import Form from './AddUserForm';

class AddUser extends Component{

	state={
		fields: {}
	};

	onSubmit= fields => {
		this.setState({ fields })
		const objectToSend = {
			fields
		}
		fetch('http://localhost:5000/api_post',{
			method: 'POST',
			headers: {'Content-type': 'application/json',
			},
			body: JSON.stringify(objectToSend),
		}).then(res=> res.json())
			.then(res => console.log(res))
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