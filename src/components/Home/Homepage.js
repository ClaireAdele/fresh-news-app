import React from 'react'
import Title from "./Title"
import Blurb from "./Blurb"
import MostRecent from "./MostRecent"
import MostVotes from './MostVotes'

export default function Homepage() {
    return (
        <div id="homepage">
            <Title />
            <Blurb />
            <div id="flex-container-mostProperty">
            <MostRecent />
            <MostVotes />
            </div>
        </div>
    )
}
