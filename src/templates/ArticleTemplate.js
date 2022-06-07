import { graphql } from "gatsby"
import React from "react"
import JumbotronPage from "../components/JumbotronPage"
import Layout from "../layouts/Layout"

export default function ArticleTemplate({ data }) {
  return (
    <Layout>
      <JumbotronPage title={data.article.frontmatter.title} />
      <section>
        <div className="container">
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: data.article.html }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String) {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
