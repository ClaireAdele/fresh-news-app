import React, { Component } from 'react';
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import axios from "axios";
import { Link } from "@reach/router";
import CommentsSection from "../Comments/CommentsSection";
import VoteHandlerButton from "../VoteHandlerButton";

export default class ArticlePage extends Component {
    state = {
        article: {},
        isLoading: true
    }

    componentDidMount() {
        axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then((response) => {
            const article = response.data.article;
            this.setState({ article, isLoading : false })
        })
    }
    
    render() {
        console.log(this.props)
        return (
            this.state.isLoading 
            ? 
            <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> 
            :
            <div class="display-article">
                <h1>{this.state.article.title}</h1>
                <p>{this.state.article.body}</p>
                <ul>
                    <li>Author: {this.state.article.author}</li>
                    <li>Comments Number: {this.state.article.comments_count}</li>
                    <li>Topic: <Link to={`/topics/${this.state.article.topic}`}>{this.state.article.topic}</Link></li>
                    <li>Date: {this.state.article.created_at}</li>
                    <li><VoteHandlerButton votes={this.state.article.votes} article_id={this.state.article.article_id} /></li>
                </ul>
                <div>
                    <CommentsSection loggedIn={this.props.loggedIn} username={this.props.username} article_id={this.state.article.article_id}/>
                </div>           
                </div>
        )
    }
}

