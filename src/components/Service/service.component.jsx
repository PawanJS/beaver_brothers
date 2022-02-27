import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';

import * as Styled from './service.styles';

export const Service = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      markdownRemark(frontmatter: { category: { eq: "service section" } }) {
        id
        frontmatter {
          Title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "service" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              Title
              Paragraph
              CTAText
              Slug
              Icon {
                base
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    width: 32
                    height: 32
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const Service = data.markdownRemark.frontmatter;

  return (
    <Styled.Service>
      <div className="container-small">
        <Styled.TitleWrapper>
          <StaticImage
            style={Styled.StarStd}
            src="../../assets/images/global/star.svg"
            alt="Star Image"
            placeholder="blurred"
            layout="fixed"
            width={124}
            height={124}
          />
          <h3 className="heading-3">{Service.Title}</h3>
        </Styled.TitleWrapper>
        <Styled.ServiceGrid>
          {data.allMarkdownRemark.edges.map((service) => (
            <Styled.ServiceCard
              to={service.node.frontmatter.Slug}
              key={service.node.id}
            >
              <GatsbyImage
                image={
                  service.node.frontmatter.Icon.childImageSharp.gatsbyImageData
                }
                style={Styled.FeatureIcon}
                alt={service.node.frontmatter.Icon.base}
              />
              <Styled.CardTitle className="heading-3">
                {service.node.frontmatter.Title}
              </Styled.CardTitle>
              <Styled.ServiceParagraph className="paragraph">
                {service.node.frontmatter.Paragraph}
              </Styled.ServiceParagraph>
              <StaticImage
                className="service-star"
                style={Styled.ServiceStar}
                src="../../assets/images/service/card-bg.svg"
                alt="Branding Image"
                placeholder="blurred"
                layout="fixed"
                width={138}
                height={128}
              />
              <TextButton data={service} />
            </Styled.ServiceCard>
          ))}
        </Styled.ServiceGrid>
        <StaticImage
          className="d-none"
          style={Styled.Scribble}
          src="../../assets/images/global/squiggle.svg"
          alt="scribble Image"
          placeholder="blurred"
          layout="fixed"
          width={184}
          height={184}
        />
      </div>
    </Styled.Service>
  );
};
