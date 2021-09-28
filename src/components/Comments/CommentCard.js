import React, { Component } from 'react';
import VoteHandlerButton from '../VoteHandlerButton';
import DeleteComment from './DeleteComment';
import "./CommentCard.css";

export default  class CommentCard extends Component {  
    render() {
        return (
        this.props.username === this.props.comment.author ?
        <div className="commentCard">
        <div className="commentInfo">
            <ul>
                <li>{this.props.comment.author}</li>
                <li>{this.props.comment.created_at}</li>
                <li><VoteHandlerButton votes={this.props.comment.votes} article_id={this.props.comment.article_id} comment_id={this.props.comment.comment_id}/></li>            
                </ul>
        </div>
        <div className="commentBody">
            <p>{this.props.comment.body}</p>
        </div>
        <DeleteComment deleteComment={this.props.deleteComment}  comment_id={this.props.comment.comment_id}/>
        </div>
        :
        <div className="commentCard">
        <div className="commentInfo">
            <ul>
                <li>{this.props.comment.author}</li>
                <li>{this.props.comment.created_at}</li>
                <li><VoteHandlerButton votes={this.props.comment.votes} article_id={this.props.comment.article_id} comment_id={this.props.comment.comment_id}/></li>            
                </ul>
        </div>
        <div className="commentBody">
            <p>{this.props.comment.body}</p>
        </div>
        </div>
        )
    }
}
