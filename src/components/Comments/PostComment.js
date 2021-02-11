import axios from 'axios'
import React, { Component } from 'react'

export default class PostComment extends Component {
    
    state = {
        username : "",
        body: ""
    }

    postNewComment = (comment) => {
        return axios.post(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`, comment).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.postNewComment(this.state).then((res) => {
            this.setState({res})
        })
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <label>Username: <input type="text" name="username" onChange={this.handleInputChange}/></label>
               <label>Comment: <input type="text" name="body"  onChange={this.handleInputChange}/></label>
               <button type="submit">Submit</button>
            </form >
        )
    }
}
