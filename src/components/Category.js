import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as classes from "./category.module.css"
export default function Category({ category }) {
  const {
    frontmatter: { slug, title,icon },
    excerpt,
  } = category
  return (
    <div className={classes.category}>
      <GatsbyImage
        image={getImage(icon)}
        className={classes.icon}
      />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={`/categories/${slug}`}>Read more!</Link>
    </div>
  )
}
