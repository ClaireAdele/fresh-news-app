import React from 'react'
import { Link } from "@reach/router"

export default function ArticleCard(props) {
    return (
        <div>
            <div className="article-card">
                <h4>{props.article.title}</h4>
                <ul>
                    <li>Topic:
                        <Link to={`/topics/${props.article.topic}`}>{props.article.topic}</Link>
                    </li>
                    <li>Author: {props.article.author}</li>
                    <li>Date: {props.article.created_at}</li>
                    <li>Votes: {props.article.votes}</li>
                    <Link to={`/articles/${props.article.article_id}`} >Read full article</Link>
                </ul>
            </div>
        </div>
    )
}
