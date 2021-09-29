import React, { Component } from 'react';
import { getUser } from './api-methods';
import './LoginHandler.css';

export default class LoginHandler extends Component {
    state = {
        username : "",
        loggedIn: false,
        errorMessage: ""
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (event) => {    
        event.preventDefault()       
        getUser(this.state.username).then((response) => {
            localStorage.setItem("username", this.state.username);
            localStorage.setItem("loggedIn", "true");
            this.setState({ errorMessage: "", loggedIn: true})
            return response;
        }).catch(() => {
                this.setState({ errorMessage: "User does not exist in the database" })
            })
    }

    render() {
        return (
            this.state.errorMessage ?
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <input class="inputUsername" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <button class="signIn">Sign-In</button>
            </form>
            <p>{this.state.errorMessage}</p>
            </div>
            :
            this.state.loggedIn ?
            //here I need to add a log out button instead
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <input class="inputUsername" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <button class="signIn">Sign-In</button>
                <p>Login Successful!</p>
            </form>
            </div>
            :
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <input class="inputUsername" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <button class="signIn">Sign-In</button>
            </form>
            </div>
        )
    }
}
