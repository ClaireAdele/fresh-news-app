import React, { Component } from 'react';
import axios from "axios";
import CommentsListMaker from "../CommentsListMaker"
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";

export default class CommentsSection extends Component {
    state = {
        comments : [],
        isLoading: true
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
            <div className="commentSection">
                <h3>Comments Section</h3>
                <CommentsListMaker comments={this.state.comments}/>
            </div>
        )
    }
}
