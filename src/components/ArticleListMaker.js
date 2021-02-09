import React from 'react'
import ArticleCard from "./Articles/ArticleCard"

export default function ArticleListMaker(props) {
    return (
        <div>
            {props.articles.map((article) => {
                    return <ArticleCard key={article.article_id} article={article} />
                })}
        </div>
    )
}
