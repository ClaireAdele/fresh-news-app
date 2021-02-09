import React from 'react'
import { Link } from "@reach/router"
import Logo from "../../imgs/happy-fruit.jpg"

export default function Navbar() {
    return (
        <div id="navigation">
            <img id="navBar-logo" src={Logo}></img>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/articles">Articles</Link>
            <Link className="nav-link" to="/topics/:topics">Topics</Link>
        </div>
    )
}
