import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import JumbotronPage from "../components/JumbotronPage"
import Layout from "../layouts/Layout"

export default function CategoryTemplate({ data }) {
  return (
    <Layout>
      <JumbotronPage title={data.category.title} />
      <section>
        <div className="container">
          <div className="sectionHeader">
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: data.category.content.childMarkdownRemark.html,
              }}
              style={{ textAlign: "left" }}
            />
          </div>
          <div className="articles">
            {data.articles.nodes.map(({ id, title, slug }) => (
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
    category: contentfulCategory(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    articles: allContentfulArticle(
      filter: { category: { slug: { eq: $slug } } }
    ) {
      nodes {
        id
        title
        slug
      }
    }
  }
`
