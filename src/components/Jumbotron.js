import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as classes from "./jumbotron.module.css"
export default function Jumbotron() {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <section className={classes.jumbotron}>
      <StaticImage src="../images/jumbotron-main.png" className={classes.background} />
      <div className={classes.content}>
        <div className={classes.textContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to="/categories">explore categories</Link>
        </div>
      </div>
    </section>
  )
}
