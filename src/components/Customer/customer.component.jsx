import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styled from './customer.styles';

export const Customer = () => {
  const data = useStaticQuery(graphql`
    query CustomerQuery {
      allFile(
        filter: {
          extension: { eq: "png" }
          relativeDirectory: { eq: "customer" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              id
              gatsbyImageData(
                width: 180
                height: 80
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const Customer = data.allFile.edges;

  return (
    <Styled.CustomerSection>
      <div className="container-large">
        <Styled.CustomerLogoGrid>
          {Customer.map(({ node }) => (
            <GatsbyImage
              key={node.childImageSharp.id}
              style={Styled.CustomerLogo}
              image={node.childImageSharp.gatsbyImageData}
              alt={node.base}
            />
          ))}
        </Styled.CustomerLogoGrid>
      </div>
    </Styled.CustomerSection>
  );
};
