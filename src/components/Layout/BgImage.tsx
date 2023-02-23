import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

// import BackgroundImage from 'gatsby-background-image'

interface BackgroundImageProps {
  top?: number;
}

export default function BackgroundImage({ top = 0 }: BackgroundImageProps) {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "dots.svg" }) {
          publicURL
        }
      }
    `
  );

  // Set ImageData.
  const imageUrl = data.image.publicURL;
  // const imageUrl = ''

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255,255, 1)), url(${imageUrl})`,
        stroke: 'red',
        backgroundSize: 'cover',
        position: 'absolute',
        width: '100%',
        height: '600px',
        zIndex: -999,
        backgroundPosition: 'center',
      }}
    />
  );
}
