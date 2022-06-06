import { Link } from "gatsby"
import React from "react"
import * as classes from "./header.module.css"
export default function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.navContainer}>
          <Link to="/">
            <h1 className={classes.logo}>KnowBaze</h1>
          </Link>
          <nav>
            <Link to="/" activeClassName={classes.active}>
              Home
            </Link>
            <Link to="/categories" activeClassName={classes.active}>
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
