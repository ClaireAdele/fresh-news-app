import React from 'react'
import CommentCard from "./Comments/CommentCard";

export default function CommentsListMaker(props) {
    return (
        <div>
              {props.comments.map((comment) => {
                    return <CommentCard comment={comment}/>
                })}
        </div>
    )
}
