import React, { Component } from 'react';
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import axios from "axios";
import ArticleListMaker from "../ArticleListMaker"
import { Link } from "@reach/router"

export default class ArticlesList extends Component {
    state = {
        articles : [],
        isLoading : true
    }

    componentDidMount() {
        return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((response) => {
            const articles = response.data.articles;
            this.setState({ articles, isLoading : false})
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            const sort = this.props.location.search;
            console.log(sort)
            return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles${sort}`).then((response) => {
                const articles = response.data.articles;
                this.setState({ articles, isLoading : false})
            })
        }
    }

    render() {
        return (
                this.state.isLoading ? <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
                <div id="articles-flex-container">
                    <h1>Articles List</h1>
                <Link to="/articles?sort_by=votes">Most Popular Articles</Link>
                <Link to="/articles?sort_by=created_at">Most Recent Articles</Link>
                <Link to="/articles?order=%27desc%27">Oldest Articles First</Link>
                <ArticleListMaker articles={this.state.articles}/>
                </div>
        )
    }
}
