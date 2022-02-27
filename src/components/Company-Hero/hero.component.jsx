import React from 'react';

import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styled from './hero.styles';

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query CompanyHeroQuery {
      markdownRemark(
        frontmatter: { category: { eq: "company hero section" } }
      ) {
        id
        frontmatter {
          Title
          WelcomeText
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "company hero" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              Class
              BG {
                base
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              Image {
                base
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
        }
      }
    }
  `);

  const Hero = data.markdownRemark.frontmatter;

  return (
    <Styled.Hero>
      <div className="container-large">
        <Styled.TitleWrapper>
          <Styled.HeadingNormal>{Hero.WelcomeText}</Styled.HeadingNormal>
          <Styled.AccentBlock>
            <Styled.HeroTitle>{Hero.Title}</Styled.HeroTitle>
            <StaticImage
              style={Styled.CompanyStar}
              src="../../assets/images/global/star.svg"
              alt="Star Image"
              placeholder="blurred"
              layout="fixed"
              width={124}
              height={124}
            />
          </Styled.AccentBlock>
        </Styled.TitleWrapper>
        <Styled.CompanyGrid>
          {data.allMarkdownRemark.edges.map((image) => (
            <Styled.CompanyImageGrid
              key={image.node.id}
              className={image.node.frontmatter.Class}
            >
              <GatsbyImage
                className="company_bg"
                style={Styled.CompanyImage}
                image={
                  image.node.frontmatter.BG.childImageSharp.gatsbyImageData
                }
                alt={image.node.frontmatter.BG.base}
              />
              <GatsbyImage
                className="company_image"
                style={Styled.CompanyImage}
                image={
                  image.node.frontmatter.Image.childImageSharp.gatsbyImageData
                }
                alt={image.node.frontmatter.Image.base}
              />
            </Styled.CompanyImageGrid>
          ))}
        </Styled.CompanyGrid>
      </div>
    </Styled.Hero>
  );
};
