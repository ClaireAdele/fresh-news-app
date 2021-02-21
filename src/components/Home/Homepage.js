import React from 'react'
import Title from "./Title"
import Blurb from "./Blurb"
import MostArticles from "./MostArticles"


export default function Homepage() {
    return (
        <div id="homepage">
            <Title />
            <Blurb />
            <div id="flex-container-mostProperty">
            <MostArticles />
            <MostArticles votes ={"?sort_by=votes"} />
            </div>
        </div>
    )
}
