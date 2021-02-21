import axios from 'axios'
import React, { Component } from 'react'

export default class PostComment extends Component {
    
    state = {
        username : this.props.username,
        body: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postNewComment(this.state).then((res) => {
            this.setState({res})
        })
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render() {
        return (
            <form className="postComment" onSubmit={this.handleSubmit}>
               <label>Comment: <textarea id="commentBox" type="text" name="body"  onChange={this.handleInputChange}/></label>
               <button className="submitButton" type="submit">Submit</button>
            </form >
        )
    }
}
