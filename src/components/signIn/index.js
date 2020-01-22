import React, { Component } from 'react';
import SignIn from './signIn';

class index extends Component {

    render() {
        return (
            <div className="container">
               <div className="login-form">
			<div className="main-div">
            <h1 className="whitetitle">Login</h1>
            <SignIn/>
            </div>
			</div>
            </div>
        );
    }
}

export default index;