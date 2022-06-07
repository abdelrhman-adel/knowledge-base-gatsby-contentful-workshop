const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`    {
    categories: allFile(
      filter: { sourceInstanceName: { eq: "categories" } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            slug
          }
        }
      }
    }
    articles: allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            slug
          }
        }
      }
    }
  }`)
  data.categories.nodes.forEach(
    ({
      childMarkdownRemark: {
        frontmatter: { slug },
      },
    }) => {
      actions.createPage({
        path: "/categories/" + slug,
        component: path.resolve("./src/templates/CategoryTemplate.js"),
        context: { slug },
      })
    }
  )
  data.articles.nodes.forEach(
    ({
      childMarkdownRemark: {
        frontmatter: { slug },
      },
    }) => {
      actions.createPage({
        path: "/articles/" + slug,
        component: path.resolve("./src/templates/ArticleTemplate.js"),
        context: { slug },
      })
    }
  )
}
