import axios from 'axios'
import React, { Component } from 'react'
import ArticleListMaker from '../../ArticleListMaker';
import loader from "../../../imgs/ezgif-7-707ad267e4e0.gif";
import "./SearchPage.css";

export default class SearchPage extends Component {
    state = {
        articles : []
    }

    componentDidMount(prevProps) {
            return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((res) => {
            const allArticles = res.data.articles;
            const regex = new RegExp(this.props["*"], "ig")
            const filteredArticles = allArticles.filter((article) => {
                return article.body.match(regex);
            })
            this.setState({ articles : filteredArticles});
        })
    }
    

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) { 
            return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((res) => {
            const allArticles = res.data.articles;
            const regex = new RegExp(this.props["*"], "ig")
            const filteredArticles = allArticles.filter((article) => {
                return article.body.match(regex);
            })
            this.setState({ articles : filteredArticles});
            })
        }
    }

    render() {
        return (
            this.state.isLoading ? <div> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
            <div id="searchPage">
                <h1>Results for keyword "{`${this.props["*"]}`}"</h1>
                <ArticleListMaker articles={this.state.articles} />
            </div>
        )
    }
}
