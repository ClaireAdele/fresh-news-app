import React from 'react'

export default function CommentCard(props) {
    return (
        <div className="commentCard">
        <div className="commentInfo">
            <ul>
                <li>{props.comment.author}</li>
                <li>{props.comment.created_at}</li>
                <li> Votes: {props.comment.votes}</li>
            </ul>
        </div>
        <div className="commentBody">
            <p>{props.comment.body}</p>
        </div>
        </div>
    )
}
