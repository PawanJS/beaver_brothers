import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styled from './values.styles';

export const Values = () => {
  const data = useStaticQuery(graphql`
    query ValueQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "value" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              Title
              Paragraph
              Icon {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
                base
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Styled.Values>
      <div className="container-large">
        <Styled.ValuesGrid>
          {data.allMarkdownRemark.edges.map((value) => (
            <Styled.ValueCard key={value.node.id}>
              <GatsbyImage
                image={
                  value.node.frontmatter.Icon.childImageSharp.gatsbyImageData
                }
                style={Styled.ValueIcon}
                alt={value.node.frontmatter.Icon.base}
              />
              <Styled.ValueTitle>
                {value.node.frontmatter.Title}
              </Styled.ValueTitle>
              <p>{value.node.frontmatter.Paragraph}</p>
            </Styled.ValueCard>
          ))}
        </Styled.ValuesGrid>
      </div>
    </Styled.Values>
  );
};
