import React, { Component } from 'react'


export default class DeleteComment extends Component {
    state = {
        commentToDelete : this.props.comment_id
    }

    handleClick() {
        this.props.deleteComment(this.state.commentToDelete)
    }

    render() {
        return (
            <button onClick={() => {this.handleClick()}}>❌ Delete Comment</button>
        )
    }
}
