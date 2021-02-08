import React, { Component } from 'react'
import ArticleCard from "../Articles/ArticleCard"
import axios from "axios";

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
            this.state.isLoading ? <p>is Loading</p> :
            <div id="most-recent">
                {this.state.mostRecent.map((article) => {
                    console.log(article)
                    return <ArticleCard key={article.article_id} article={article}/>
                })}
            </div>
        )
    }
}

