import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { ServiceCard } from '../Service-Card/service-card.component';

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
            <ServiceCard data={service} key={service.node.id} />
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
