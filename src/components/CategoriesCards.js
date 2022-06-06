import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Category from "./Category"

export default function CategoriesCards() {


  const { categories: {nodes} } = useStaticQuery(graphql`
    query CategoriesQuery{
      categories: allFile(
        filter: { sourceInstanceName: { eq: "categories" } }
      ) {
        nodes {
          id
          childMarkdownRemark {
            excerpt(format: PLAIN, pruneLength: 150, truncate: true)
            frontmatter {
              slug
              title
              icon {
                childImageSharp {
                  gatsbyImageData(width: 64, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="categories">
      {nodes.map(({ id, childMarkdownRemark }) => (
        <Category key={id} category={childMarkdownRemark} />
      ))}
    </div>
  )
}
