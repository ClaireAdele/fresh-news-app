import React, { Component } from 'react';
import axios from "axios";
import CommentsListMaker from "../CommentsListMaker"
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import PostComment from "./PostComment";
import { deleteCommentAPI, postNewComment } from "../api-methods";
import "./CommentSection.css";

export default class CommentsSection extends Component {
    state = {
        comments : [],
        isLoading: true,
        commentDeletedSuccess : false
    }

    deleteComment = (comment) => {
        deleteCommentAPI(comment).then(() => {
            const newComments = this.state.comments.filter((commentObj) => {
                return commentObj.comment_id !== comment;
            })
            this.setState({ comments : newComments, commentDeletedSuccess : true })
        })             
        .catch((err) => {
            console.log(err)
        })
    }

    postNewComment = (comment) => {
        let article_id = this.props.article_id;
        console.log(comment)
        return postNewComment(article_id, comment).then((res) => {
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
            this.props.loggedIn ?
            this.state.commentDeletedSuccess ? 
            <div className="commentSection">
                <h3>Comments Section</h3>
                <p>Comment Deleted!</p>
                <PostComment postNewComment={this.postNewComment} username={this.props.username} article_id={this.props.article_id}/>
                <CommentsListMaker loggedIn={this.props.loggedIn} username={this.props.username} deleteComment={this.deleteComment} comments={this.state.comments}/>
            </div>
            :
            <div className="commentSection">
                <h3>Comments Section</h3>
                <PostComment postNewComment={this.postNewComment}  username={this.props.username} article_id={this.props.article_id}/>
                <CommentsListMaker loggedIn={this.props.loggedIn} username={this.props.username} deleteComment={this.deleteComment} comments={this.state.comments}/>
            </div>
            :
            <div className="commentSection">
                <h3>Comments Section</h3>
                <CommentsListMaker loggedIn={this.props.loggedIn} username={this.props.username} deleteComment={this.deleteComment} comments={this.state.comments}/>
            </div>

        )
    }
}
