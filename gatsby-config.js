module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wm8um23wj2hy`,
        accessToken: `f6667237441d82f46cef8c1c585ac190c14a969793dd064ba94f64679b8fa71c`,
      },
    }
  ],
}
