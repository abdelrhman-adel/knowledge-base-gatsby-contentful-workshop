import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as classes from "./header.module.css"
export default function Header() {
  const {
    site: {
      siteMetadata: { name },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.navContainer}>
          <Link to="/">
            <h1 className={classes.logo}>{name}</h1>
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
