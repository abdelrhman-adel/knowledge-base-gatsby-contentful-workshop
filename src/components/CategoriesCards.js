import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Category from "./Category"

export default function CategoriesCards() {


  const { categories: {nodes} } = useStaticQuery(graphql`
    query CategoriesQuery{
      categories: allContentfulCategory {
        nodes {
          id,
          title
          slug
          icon {
            gatsbyImageData(width: 64, layout: CONSTRAINED)
          }
          content {
            childMarkdownRemark {
              excerpt(format: PLAIN, pruneLength: 150, truncate: true)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="categories">
      {nodes.map((node) => (
        <Category key={node.id} category={node} />
      ))}
    </div>
  )
}
