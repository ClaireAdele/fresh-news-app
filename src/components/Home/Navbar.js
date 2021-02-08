import React from 'react'
import { Link } from "@reach/router"

export default function Navbar() {
    return (
        <div id="navigation">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/articles">Articles</Link>
            <Link className="nav-link" to="/topics/:topics">Topics</Link>
        </div>
    )
}
