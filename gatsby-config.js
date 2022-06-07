/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    name: "knowBaze",
    title: "need some help?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula fermentum odio in tristique. Morbi lacus nunc,ullamcorper eu lacus.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `cdayw0pi4gwc`,
        accessToken: `0GaRNBkAQKOfEiHsYzgvzN1l-UraoyJFaaTv_wpisq4`,
      },
    },
  ],
}
