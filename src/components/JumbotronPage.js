import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as classes from "./jumbotron-page.module.css"
export default function JumbotronPage({ title, description }) {
  return (
    <section className={classes.jumbotron}>
      <StaticImage
        src="../images/jumbotron-page.png"
        className={classes.background}
      />
      <div className={classes.content}>
        <div className="container">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  )
}
