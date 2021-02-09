import React, { Component } from 'react'
import ArticleCard from "../Articles/ArticleCard"
import axios from "axios";
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif"
import ArticleListMaker from "../ArticleListMaker"


export default class MostRecent extends Component {
    state = {
        mostRecent : [],
        isLoading: true
    }

    componentDidMount() {
        return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((response) => {
        const mostRecent = []
        for(let i = 0; i <= 4; i++) {
            mostRecent.push(response.data.articles[i]);
        }
        return this.setState({ mostRecent, isLoading: false})
        })
    }

    render() {
        return (
            this.state.isLoading ? <div> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
            <div id="most-recent">
                <h3 className="mostTitles">Most Recent Articles</h3>
                <ArticleListMaker articles={this.state.mostRecent} />
            </div>
        )
    }
}

