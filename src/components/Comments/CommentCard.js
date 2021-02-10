import React, { Component } from 'react';
import VoteHandlerButton from '../VoteHandlerButton'

export default  class CommentCard extends Component {  
    render(){
    return (
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
