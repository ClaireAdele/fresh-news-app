import React from 'react'
import { Link } from "@reach/router"

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics/:topics">Topics</Link>
        </div>
    )
}
