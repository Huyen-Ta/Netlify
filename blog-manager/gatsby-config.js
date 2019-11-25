require('dotenv').config({
  path: `.env.${process.env.GATSBY_API_URL}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    apiUrl: process.env.GATSBY_API_URL,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-flow',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'BLOG',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'blog',
        // Url to query from
        url: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-theme-blog',
      options: {
        /*
        - basePath defaults to `/`
        - contentPath defaults to `content/posts`
        - assetPath defaults to `content/assets`
        - mdx defaults to `true`
        */
        basePath: './gatsby-theme-blog',
        contentPath: 'content/blogPosts',
        assetPath: 'content/blogAssets',
        mdx: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'scgis8nzdaol',
        accessToken: '2uGApFHASiM21-4VYBMzM-1uU5xmm5lwacdS-SLcOuU',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
