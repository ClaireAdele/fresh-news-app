import React, { Component } from 'react';
import axios from "axios";
import CommentsListMaker from "../CommentsListMaker"
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import PostComment from "./PostComment"

export default class CommentsSection extends Component {
    state = {
        comments : [],
        isLoading: true,
        commentDeletedSuccess : false
        // erroredOut: false,
        // textError : ""
    }

    deleteComment = (comment) => {
        return axios.delete(`https://claire-castanet-nc-news.herokuapp.com/api/comments/${comment}`).then((res) => {
            console.log(res)
           this.setState((currentState) => {
           return { commentDeletedSuccess : true }
           })
        }).catch((err) => {
            console.log(err)
        })
    }

    postNewComment = (comment) => {
        return axios.post(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`, comment).then((res) => {
            return res;
        }).then((res) => {
            this.setState((currentState) => {
                return {comments : [ res.data.comment ,...currentState.comments] }
            })
        })
    }

    componentDidMount() {
        axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`).then((response) => {
        const comments = response.data.comments;
        this.setState({ comments, isLoading: false })
        })
    }

    render() {
        return (
            this.state.isLoading 
            ? 
            <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div>
            :
            this.state.commentDeletedSuccess ? 
            <div className="commentSection">
                <h3>Comments Section</h3>
                <p>Comment Deleted!</p>
                <PostComment postNewComment={this.postNewComment} article_id={this.props.article_id}/>
                <CommentsListMaker deleteComment={this.deleteComment} comments={this.state.comments}/>
            </div>
            :
            <div className="commentSection">
                <h3>Comments Section</h3>
                <PostComment postNewComment={this.postNewComment} article_id={this.props.article_id}/>
                <CommentsListMaker deleteComment={this.deleteComment} comments={this.state.comments}/>
            </div>
        )
    }
}
