import React, { Component } from 'react'
import axios from "axios";

export default class DeleteComment extends Component {
    deleteComment = (comment) => {
        return axios.delete(`https://claire-castanet-nc-news.herokuapp.com/api/comments/${comment}`).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        })
    }

    handleClick() {
        this.deleteComment(this.props.comment_id).then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <button onClick={() => {this.handleClick()}}>❌ Delete Comment</button>
        )
    }
}
