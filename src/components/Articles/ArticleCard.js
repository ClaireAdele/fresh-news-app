import React from 'react'

export default function ArticleCard(props) {
    // console.log(props)
    return (
        <div>
            <div className="article-card">
                <h4>{props.article.title}</h4>
                <ul>
                    <li>{props.article.topic}</li>
                    <li>{props.article.author}</li>
                    <li>{props.article.created_at}</li>
                    <li>link to article page</li>
                </ul>
            </div>
        </div>
    )
}
