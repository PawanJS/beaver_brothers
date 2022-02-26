import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './cta.styles';

export const Cta = () => {
  const data = useStaticQuery(graphql`
    query CTAQuery {
      markdownRemark(frontmatter: { category: { eq: "cta section" } }) {
        frontmatter {
          Title
          CTASpan
          Paragraph
          CTAText
          Slug
        }
      }
    }
  `);

  const Cta = data.markdownRemark.frontmatter;

  return (
    <Styled.CTASection>
      <div className="container-large">
        <Styled.CTABlock>
          <StaticImage
            style={Styled.CTABg}
            src="../../assets/images/cta/CTA-Star.svg"
            alt="CTA Image"
            placeholder="blurred"
            layout="fixed"
            width={232}
            height={232}
          />
          <Styled.CTAGrid>
            <div>
              <Styled.Heading className="heading-2">
                {Cta.Title} <Styled.CTASpan>{Cta.CTASpan}</Styled.CTASpan>
              </Styled.Heading>
            </div>
            <Styled.ContentWrapper>
              <Styled.CTAParagraph>{Cta.Paragraph}</Styled.CTAParagraph>
              <Styled.CTAButton to={Cta.Slug}>
                {Cta.CTAText}
                <StaticImage
                  className="button_arrow"
                  style={Styled.ButtonArrow}
                  src="../../assets/images/global/arrow-white.svg"
                  alt="Arrow"
                  placeholder="blurred"
                  layout="fixed"
                  width={24}
                  height={24}
                />
              </Styled.CTAButton>
            </Styled.ContentWrapper>
          </Styled.CTAGrid>
        </Styled.CTABlock>
      </div>
    </Styled.CTASection>
  );
};
