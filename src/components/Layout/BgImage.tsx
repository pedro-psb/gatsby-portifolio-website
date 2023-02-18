import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// import BackgroundImage from 'gatsby-background-image'

interface BackgroundImageProps {
  top?: number
}
export default function BackgroundImage({ top = 0 }: BackgroundImageProps) {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "pattern-4.svg" }) {
            publicURL
        }
      }
    `
  )

  // Set ImageData.
  const imageUrl = data.image.publicURL
  console.log(imageUrl)
  // const imageUrl = ''

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(255, 165, 0, 0.05)), url(${imageUrl})`, backgroundSize: 'cover', position: 'absolute', width: '100%', height: "600px", top: top, zIndex: -999, backgroundPosition: 'center' }} >
    </ div>
  )
}

