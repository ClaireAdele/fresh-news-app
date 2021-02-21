import React, { Component } from 'react'
import { patchVotes } from './api-methods';

export default class VoteHandlerButton extends Component {
    state = {
        votes : this.props.votes
    }

    handleClick (number) {
        this.setState((currentState) => {
            return {votes : currentState.votes+= number}
        })
        const article_id = this.props.article_id;
        const comment_id = this.props.comment_id;
        patchVotes(article_id, comment_id, number)
    }

    render() {
        return (
        <div>
        Votes : {this.state.votes}
        <button className="voteButton" onClick={() => {this.handleClick(1)}}>🍍 Fresh! (+1)</button>
        <button className="voteButton" onClick={() => {this.handleClick(-1)}}>☣️ Rotten! (-1)</button>
        </div>
        )
    }
}

