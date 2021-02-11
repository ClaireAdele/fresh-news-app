import React, { Component } from 'react'
import SearchPage from "./SearchPage"
import { Link } from "@reach/router"


export default class GetRegex extends Component {
    state = {
        regexpSearch : "",
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render() {
        return (
            <div>
           
            <form id="searchBar" className="nav-link" onSubmit={this.handleSubmit}>
              <label>Search Article<input id="searchBar" type="text" name="regexpSearch" onChange={this.handleChange}/></label>
              <Link to={`/search_results/${this.state.regexpSearch}`}><button id="submitButton">Submit</button></Link>
            </form>
            </div>
        )
    }
}
