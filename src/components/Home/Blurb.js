import React from 'react'
import { Link } from "@reach/router"

export default function Blurb() {
    return (
        <div id="blurb">
            <p>The leading website in all the things that matter in life! We pride ourselves on covering the essentials, and nothing but the essentials:</p>
            <ul><li><Link to="topics/coding">Coding!</Link></li>
            <li><Link to="topics/cooking">Coooking!</Link></li>
            <li><Link to="topics/football">Football!</Link></li></ul>
        </div>
    )
}
