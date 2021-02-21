import React, { Component } from 'react';
import { Link } from "@reach/router"

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
        this.props.checkUserExists(this.state.username).then((response) => {
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
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <button>Submit</button>
            </form>
            <p>{this.state.errorMessage}</p>
            </div>
            :
            this.state.loggedIn ?
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
               <button>Submit</button>
                <p>Login Successful!</p>
            </form>
            </div>
            :
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
