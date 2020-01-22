import React, { Component } from 'react';
import { Button, Label, Input, Form } from 'reactstrap';
import axios from 'axios'
class signIn extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		};
		this.authUser = this.authUser.bind(this);
	}
	
    authUser(user){
		axios.post('http://localhost:3001/signIn', {
		  usuario: user.email,
		  password: user.password
		})
		.then(function (response) {
		  console.log(response);
		  if(response.status === 200){
		   sessionStorage.setItem('groups', JSON.stringify(response.data.groups));
		   window.location.href = "/Dashboard";
		  }
		})
		.catch(function (error) {
		  console.log(error)
		  //window.location.href = "/SignIn";
		});
	}
	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	}
	handleSubmit = event => {
		event.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		this.authUser(user);
	}

	render() {
		return (
				<Form id="Login" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<Label htmlFor="email" className="cols-sm-2 control-label whitetitle">Email</Label>
						<div className="input-group">
							<Input type="text" name="email" id="email" onChange={this.handleChange} placeholder="Enter your Email" />
						</div>
					</div>
					<div className="form-group">
						<Label htmlFor="password" className="cols-sm-2 control-label whitetitle">Password</Label>
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
							<Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Enter your Password" />
						</div>
					</div>
					<div className="form-group ">
						<Button type="submit" className="btn btn-primary">Login</Button>
						<br />
					</div>
				</Form>	
		);
	}
}

export default signIn;