// @flow
// Libs
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type Props = {|
  name: String,
  className?: String,
|}

// Defined component Static Image
const StaticImage = ({ name, className }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = data && data.allFile.edges.find(({ node }) => name === node.name)

  return (
    match.node && (
      <Img
        name={name}
        fluid={match.node.childImageSharp.fluid}
        alt={name}
        className={className}
        title={name}
      />
    )
  )
}

export default StaticImage
