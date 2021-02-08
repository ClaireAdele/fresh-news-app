import React from 'react';
import { Router } from "@reach/router";
import ArticleList from "./Articles/ArticlesList";
import ArticlePage from "./Articles/ArticlePage";
import TopicPage from "./Topics/TopicPage"

export default function NestedRouter() {
    return (
        <div>
            <Router>
                <ArticleList path= "/articles" />
                <ArticlePage path= "/articles/:article_title" />
                <TopicPage path="/topics/:topic" />
            </Router>
        </div>
    )
}
