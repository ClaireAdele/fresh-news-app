import React, { Component } from 'react'
import loader from "../../imgs/ezgif-7-707ad267e4e0.gif";
import axios from "axios";
import { Link } from "@reach/router"

export default class TopicPage extends Component {
    state = {
        topic : {},
        isLoading: true
    }

    componentDidMount() {

    }

    render() {
        return (this.state.isLoading ? <div class="articles-loader"> <img class="loader" src={loader} alt="loading..." /> <p>Fresh News Incoming!</p> </div> :
            <div>
                
            </div>
        )
    }
}

