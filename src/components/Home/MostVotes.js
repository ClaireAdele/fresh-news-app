import React, { Component } from 'react';
import axios from "axios";
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import ArticleListMaker from "../ArticleListMaker";


export default class mostVotes extends Component {
    state = {
        mostVotes : [],
        isLoading: true
    }

    componentDidMount() {
        return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles?sort_by=votes&order=%22desc%22").then((response) => {
            const mostVotes = []
            for(let i = 0; i <= 4; i++) {
                mostVotes.push(response.data.articles[i]);
            }
            return this.setState({ mostVotes, isLoading: false})
        })
    }

    render() {
        return (
            this.state.isLoading ? <div> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
            <div id="most-recent">
                <h3 className="mostTitles">Most Popular Articles</h3>
                <ArticleListMaker articles={this.state.mostVotes} />
            </div>
        )
    }
}
