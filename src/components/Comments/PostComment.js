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
               <textarea placeholder="Type your comment here" id="commentBox" type="text" name="body"  onChange={this.handleInputChange}/>
               <button id="submitCommentButton" type="submit">Submit</button>
            </form >
        )
    }
}
