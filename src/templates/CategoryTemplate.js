import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import JumbotronPage from "../components/JumbotronPage"
import Layout from "../layouts/Layout"

export default function CategoryTemplate({ data }) {
  return (
    <Layout>
      <JumbotronPage title={data.category.frontmatter.title} />
      <section>
        <div className="container">
          <div className="sectionHeader">
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: data.category.html }}
              style={{ textAlign: "left" }}
            />
          </div>
          <div className="articles">
            {data.articles.nodes.map(({ id, frontmatter: { title, slug } }) => (
              <Link key={id} className="articleLink" to={`/articles/${slug}`}>
                <div>
                  <StaticImage
                    className="articleIcon"
                    src="../images/icons/book.png"
                  />
                  {title}
                </div>
                <StaticImage src="../images/icons/arrow-right.png" width={32} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($slug: String) {
    category: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        icon {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
    articles: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $slug } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
