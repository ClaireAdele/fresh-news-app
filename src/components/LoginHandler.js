import axios from 'axios';
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

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
             {
            return this.props.checkUserExists(this.state.username).then((response) => {
                this.setState({ errorMessage: "", loggedIn : true})
            }).catch((err) => {
                this.setState({ errorMessage: "user does not exist in the database" })
            })
        }
    }
}

    render() {
        return (
            this.state.errorMessage ?
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
            </form>
            <p>{this.state.errorMessage}</p>
            </div>
            :
            this.state.loggedIn ?
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
                <p>Login Successful!</p>
            </form>
            </div>
            :
            <div className="loginForm">
            <form onSubmit={this.handleSubmit}>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
            </form>
            </div>
        )
    }
}
