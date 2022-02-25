import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './award.styles';

export const Award = () => {
  const data = useStaticQuery(graphql`
    query AwardQuery {
      markdownRemark(frontmatter: { category: { eq: "award section" } }) {
        id
        frontmatter {
          Title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "award" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              Title
              CTAText
              Slug
              Brand
            }
          }
        }
      }
    }
  `);

  const Award = data.markdownRemark.frontmatter;

  return (
    <Styled.AwardSection>
      <div className="container-large">
        <Styled.TitleWrapper>
          <StaticImage
            className="button_arrow"
            style={Styled.StarAward}
            src="../../assets/images/global/star.svg"
            alt="Star Image"
            placeholder="blurred"
            layout="fixed"
            width={124}
            height={124}
          />
          <h3 className="heading-3">{Award.Title}</h3>
        </Styled.TitleWrapper>
        <Styled.AwardGrid>
          {data.allMarkdownRemark.edges.map((award) => (
            <Styled.AwardCard key={award.node.id}>
              <StaticImage
                src="../../assets/images/award/award.svg"
                alt="Award Image"
                placeholder="blurred"
                layout="fixed"
                width={32}
                height={32}
              />
              <Styled.AwardLine />
              <Styled.AwardBrand>
                {award.node.frontmatter.Brand}
              </Styled.AwardBrand>
              <Styled.AwardTitle>
                {award.node.frontmatter.Title}
              </Styled.AwardTitle>
              <Styled.AwardLine />
              <Styled.AwardCTA to={award.node.frontmatter.Slug}>
                {award.node.frontmatter.CTAText}
                <StaticImage
                  className="button_arrow"
                  style={Styled.AwardArrow}
                  src="../../assets/images/global/arrow-green.svg"
                  alt="Arrow Image"
                  placeholder="blurred"
                  layout="fixed"
                  width={24}
                  height={24}
                />
              </Styled.AwardCTA>
            </Styled.AwardCard>
          ))}
        </Styled.AwardGrid>
      </div>
    </Styled.AwardSection>
  );
};
