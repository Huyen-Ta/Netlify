import React from 'react'
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({ to, ...rest }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  navigate: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    allFile: {
      edges: [
        {
          node: {
            name: 'avatar',
            childImageSharp: {
              fluid: {
                aspectRatio: 1.5,
                src: 'test_image.jpg',
                srcSet: 'test',
                sizes: '(max-width: 600px) 100vw, 600px',
              },
            },
          },
        },
      ],
    },
    site: {
      siteMetadata: {
        author: 'Huyen Ta',
        description: 'Post Page',
        title: 'Post',
      },
    },
  }),
}
