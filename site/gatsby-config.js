module.exports = {
  pathPrefix: `/unicef-material-ui`,
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components'
  ],
}
