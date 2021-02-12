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
        if(prevProps.username !== this.props.username) {
            {
            this.props.checkUserExists(this.state.username)
            // .catch((err) => {
            //     this.setState({ errorMessage: "User does not exist in the database" })
            // })
        }
    }
}

    render() {
        console.log(this.props)
        return (
            this.state.errorMessage ?
            <div className="loginForm">
            <form>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
            </form>
            <p>{this.state.errorMessage}</p>
            </div>
            :
            this.state.loggedIn ?
            <div className="loginForm">
            <form>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
                <p>Login Successful!</p>
            </form>
            </div>
            :
            <div className="loginForm">
            <form>
                <label>Username<input type="text" name="username" onChange={this.handleChange}/></label>
                <Link to={`/login/${this.state.username}`}><button>Submit</button></Link>
            </form>
            </div>
        )
    }
}
