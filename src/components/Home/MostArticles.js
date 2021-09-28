import React, { Component } from 'react';
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import ArticleListMaker from "../ArticleListMaker";
import { getAllArticles } from "../api-methods";
import "./MostArticles.css";


export default class MostRecent extends Component {
    state = {
        mostArticles : [],
        isLoading: true
    }

    componentDidMount() {
        this.props.votes ?
        getAllArticles(this.props.votes).then((articles) => {
            const mostVotes = []
            for(let i = 0; i <= 2; i++) {
                mostVotes.push(articles[i]);
            }
            console.log(mostVotes)
            return this.setState({ mostArticles : mostVotes, isLoading: false})
        })
        :
        getAllArticles().then((articles) => {
            const mostRecent = []
            for(let i = 0; i <= 2; i++) {
                mostRecent.push(articles[i]);
            }
            return this.setState({ mostArticles : mostRecent, isLoading: false})
        })
    }

    render() {
        return (
            this.state.isLoading ? 
            <div> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> 
            : 
            this.props.votes ?
            <div className="most-articles">
                <h3 className="mostTitles">Most Popular Articles</h3>
                <ArticleListMaker articles={this.state.mostArticles} />
            </div>
            :
            <div className="most-articles">
                <h3 className="mostTitles">Most Recent Articles</h3>
                <ArticleListMaker articles={this.state.mostArticles} />
            </div>
        )
    }
}

