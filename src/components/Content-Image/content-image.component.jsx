import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { ArrowOutlineButton } from '../Buttons/Outline-Button/Arrow-Button/arrow-button.component';
import { AccentWrapper } from '../Title-Wrapper/Accent/accent.component';

import * as Styled from './content-image.styles';

export const ContentImage = () => {
  const data = useStaticQuery(graphql`
    query ContentImageQuery {
      markdownRemark(frontmatter: { category: { eq: "content image" } }) {
        frontmatter {
          Title
          Image {
            base
            childImageSharp {
              gatsbyImageData
            }
          }
          CTAText
          Slug
          Paragraph_1
          Paragraph_2
          Paragraph_3
        }
      }
    }
  `);

  const Content = data.markdownRemark.frontmatter;

  return (
    <Styled.ContentImage>
      <div className="container">
        <AccentWrapper data={Content} />
        <Styled.CompanyGrid>
          <Styled.CompanyImageWrapper>
            <GatsbyImage
              image={Content.Image.childImageSharp.gatsbyImageData}
              style={Styled.CompanyImage}
              alt={Content.Image.base}
            />
          </Styled.CompanyImageWrapper>
          <Styled.CompanyContentWrapper>
            <div>
              <Styled.BodyLarge>{Content.Paragraph_1}</Styled.BodyLarge>
              <Styled.BodyLarge>{Content.Paragraph_2}</Styled.BodyLarge>
              <Styled.BodyLarge>{Content.Paragraph_3}</Styled.BodyLarge>
            </div>
            <ArrowOutlineButton data={Content} />
          </Styled.CompanyContentWrapper>
        </Styled.CompanyGrid>
      </div>
    </Styled.ContentImage>
  );
};
