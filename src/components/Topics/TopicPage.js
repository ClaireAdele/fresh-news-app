import React, { Component } from 'react'
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import axios from "axios";
import { Link } from "@reach/router"
import ArticleListMaker from "../ArticleListMaker"
import { getAllArticles } from '../api-methods';

export default class TopicPage extends Component {
    state = {
        articles: [],
        isLoading: true,
        topic: ""
    }

    componentDidMount() {
        getAllArticles(null, this.props.topic).then((articles) => {
            console.log(articles)
            this.setState({ articles })
        }).then(() => {
            return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/topics")
        }).then((response) => {
            const topics = response.data.topics;
            const topic = topics.filter((topic) => {
                return topic.slug === this.props.topic;
            })
            this.setState((currentState) => {
                return { ...currentState, topic, isLoading: false }
            })
        }).catch((err) => {
            this.setState({ topic : "", isLoading: false})
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.topic !== this.props.topic) {
            getAllArticles(null, this.props.topic).then((articles) => {
                this.setState({ articles })
            }).then(() => {
                return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/topics")
            }).then((response) => {
                const topics = response.data.topics;
                const topic = topics.filter((topic) => {
                    return topic.slug === this.props.topic;
                })
                this.setState((currentState) => {
                    return { ...currentState, topic, isLoading: false }
                })
            }).catch((err) => {
                this.setState({ topic : "", isLoading: false})
            })
        }
    }

    render() {
        return (
            this.state.isLoading 
                ?
                <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> 
                :
                this.state.topic ?
                <div id="flex-container-topics-page">
                <div className="titleSection">
                <h1>List of articles about {this.props.topic}</h1>
                <h3>
                    <Link to="/topics/cooking"> Cooking ||</Link>
                    <Link to="/topics/football"> Football ||</Link>
                    <Link to="/topics/coding"> Coding ||</Link></h3>
                </div>
                <ArticleListMaker articles={this.state.articles} />
                </div>
                : 
                <div id="flex-container-topics-page">
                <div className="titleSection">
                <h1>Topics List</h1>
                <h3>
                    <Link to="/topics/cooking"> Cooking ||</Link>
                    <Link to="/topics/football"> Football ||</Link>
                    <Link to="/topics/coding"> Coding ||</Link></h3>
                </div>
                </div>
        )
    }
}

