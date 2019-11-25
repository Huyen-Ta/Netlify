const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              user {
                id
                name
              }
              id
              title
              text
              comments {
                id
                text
                user {
                  id
                  name
                }
              }
              image {
                file {
                  url
                }
              }
              user {
                id
                name
              }
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    // Then for each result we create a page.
    result.data.allContentfulPost.edges.forEach(data => {
      createPage({
        path: `/${data.node.slug}`,
        component: path.resolve('./src/templates/post.js'),
        context: { data }
      })
    })
  })
}
