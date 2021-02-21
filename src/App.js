import './App.css';
import React, { Component } from 'react';
import { Router } from "@reach/router"
import Homepage from "./components/Home/Homepage"
import Navbar from './components/Home/Navbar'
import ArticleList from "./components/Articles/ArticlesList";
import ArticlePage from "./components/Articles/ArticlePage";
import TopicPage from "./components/Topics/TopicPage"
import SearchPage from "./components/Home/Search-Article/SearchPage"
import LoginHandler from './components/LoginHandler';
import axios from "axios";

class App extends Component {
  state = {
    username : localStorage.getItem("username"),
    loggedIn : localStorage.getItem("loggedIn")
  }

  checkUserExists = (username) => {
    return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/users/${username}`)
  }

  render(){
    return (
    <div className="App">
      <Navbar />
      <Router>
        <Homepage path="/" />
        <LoginHandler path="/login" checkUserExists={this.checkUserExists}/>
        <ArticleList path= "/articles" />
        <ArticlePage path= "/articles/:article_id" loggedIn={this.state.loggedIn} username={this.state.username}/>
        <TopicPage path="/topics/:topic" />
        <SearchPage path="/search_results/*" />
      </Router>
    </div>
  );
  }
  
}

export default App;
