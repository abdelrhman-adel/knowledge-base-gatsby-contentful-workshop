const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      categories: allContentfulCategory {
        nodes {
          slug
        }
      }
      articles:allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)
  data.categories.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: "/categories/" + slug,
      component: path.resolve("./src/templates/CategoryTemplate.js"),
      context: { slug },
    })
  })
  data.articles.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: "/articles/" + slug,
      component: path.resolve("./src/templates/ArticleTemplate.js"),
      context: { slug },
    })
  })
}
