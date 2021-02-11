import axios from 'axios'
import React, { Component } from 'react'
import ArticleListMaker from '../../ArticleListMaker';

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
        console.log(this.state.articles)
        return (
            <div>
                <ArticleListMaker articles={this.state.articles} />
            </div>
        )
    }
}
