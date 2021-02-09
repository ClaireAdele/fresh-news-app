import React, { Component } from 'react'
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import axios from "axios";
import { Link } from "@reach/router"

//So, I need to first do it just for when people click on the link from outside the page, and after, maybe do a componentDidUpdate to avoid reloading the whole page if they click on the options at the top of the page

export default class TopicPage extends Component {
    state = {
        topic : {},
        isLoading: true
    }

    componentDidMount() {
        axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/topics`).then((response) => {
            const topics = response.data.topics;
            console.log(topics)
            const topic = topics.filter((topic) => {
                return topic.slug === this.props.topic;
            })
            this.setState({ topic, isLoading: false })
        })
    }

    render() {
        console.log(this.state.topic)
        return (this.state.isLoading ? <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
            <div>
                <p>{this.state.topic[0].description}</p>
            </div>
        )
    }
}

