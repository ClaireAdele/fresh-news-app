import React from 'react';
import { Link } from "@reach/router";
import "./ArticleCard.css";

export default function ArticleCard(props) {
    return (
        <div>
            <div className="article-card">
            <section className="info-article-card">
                    <p>
                    <Link class="linkArticleCard" to={`/topics/${props.article.topic}`}> {props.article.topic}</Link>
                    </p>
                    <p>Author: {props.article.author}</p>
                    <p>Date: {props.article.created_at}</p>
                    <p>Votes: {props.article.votes}</p>
            </section>
            <Link to={`/articles/${props.article.article_id}`}><h4>{props.article.title}</h4></Link>
            </div>
        </div>
    )
}
