import React, { Component } from 'react';
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import ArticleListMaker from "../ArticleListMaker";
import { Link } from "@reach/router";
import { getAllArticles } from "../api-methods.js"


export default class ArticlesList extends Component {
    state = {
        articles : [],
        isLoading : true
    }

    componentDidMount() {
        getAllArticles().then((articles) => {
            this.setState({ articles, isLoading : false})
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            const sort = this.props.location.search;
            console.log(this.props)
            console.log(sort)
            getAllArticles(sort).then((articles) => {
                this.setState({ articles, isLoading : false})
            })
        }
    }

    render() {
        return (
                this.state.isLoading ? <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
                <div id="articles-flex-container">
                    <div className="titleSection">
                    <h1>Articles List</h1>
                <Link class="categoryFilter" to="/articles?sort_by=votes">Most Popular Articles</Link>
                <Link class="categoryFilter" to="/articles?sort_by=created_at">Most Recent Articles</Link>
                <Link class="categoryFilter" to="/articles?order=%27desc%27">Oldest Articles First</Link>
                    </div>
                <ArticleListMaker articles={this.state.articles}/>
                </div>
        )
    }
}
