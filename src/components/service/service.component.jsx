import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

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
      <Styled.ContainerSmall>
        <Styled.TitleWrapper>
          <StaticImage
            style={Styled.StarStd}
            src="../../assets/images/service/title-bg.svg"
            alt="Star Image"
            placeholder="blurred"
            layout="fixed"
            width={124}
            height={124}
          />
          <Styled.Heading>{Service.Title}</Styled.Heading>
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
              <Styled.ButtonText>
                <Styled.ButtonTextRemove className="button_text_remove">
                  Learn More
                </Styled.ButtonTextRemove>
                <StaticImage
                  className="button_arrow_small"
                  style={Styled.ButtonArrowSmall}
                  src="../../assets/images/service/arrow.svg"
                  alt="Branding Image"
                  placeholder="blurred"
                  layout="fixed"
                  width={24}
                  height={24}
                />
              </Styled.ButtonText>
            </Styled.ServiceCard>
          ))}
        </Styled.ServiceGrid>
      </Styled.ContainerSmall>
    </Styled.Service>
  );
};
