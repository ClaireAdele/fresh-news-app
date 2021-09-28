import React from 'react';
import Title from "./Title";
import Blurb from "./Blurb";
import MostArticles from "./MostArticles";
import "./HomePage.css";


export default function Homepage() {
    return (
        <div id="homepage">
            <div id="flex-container-mostProperty">
            <MostArticles />
            <MostArticles votes ={"?sort_by=votes"} />
            </div>
        </div>
    )
}
