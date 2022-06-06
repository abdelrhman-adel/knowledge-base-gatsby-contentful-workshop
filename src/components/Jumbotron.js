import { Link } from "gatsby"
import React from "react"
import * as classes from "./jumbotron.module.css"
export default function Jumbotron() {
  return (
    <section className={classes.jumbotron}>
      <img src="/jumbotron-main.png" className={classes.background} />
      <div className={classes.content}>
        <div className={classes.textContainer}>
          <h2>Looking for Help?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vehicula fermentum odio in tristique. Morbi lacus nunc,
            ullamcorper eu lacus.
          </p>
          <Link to="/categories">explore categories</Link>
        </div>
      </div>
    </section>
  )
}
