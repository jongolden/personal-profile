module.exports = {
  siteMetadata: {
    title: 'Jonathan Golden',
    description: 'Full Stack Developer',
    author: '@jgolden17',
    siteUrl: 'https://jonathan-golden.me/',
    googleSiteVerification: 'YM65urxVqPi5q3nXVGbzeu8g8zKcGtxb6_qBq_20eng',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jonathan Golden Personal Profile",
        short_name: "Jonathan Golden",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
