import './App.css';
import { Router } from "@reach/router"
import Homepage from "./components/Home/Homepage"
import Navbar from './components/Home/Navbar'
import ArticleList from "./components/Articles/ArticlesList";
import ArticlePage from "./components/Articles/ArticlePage";
import TopicPage from "./components/Topics/TopicPage"
import SearchPage from "./components/Home/Search-Article/SearchPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Homepage path="/" />
        <ArticleList path= "/articles" />
        <ArticlePage path= "/articles/:article_id" />
        <TopicPage path="/topics/:topic" />
        <SearchPage path="/search_results/*" />
      </Router>
    </div>
  );
}

export default App;
