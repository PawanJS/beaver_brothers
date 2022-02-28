import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { ProjectCard } from '../Project-Card/project-card.component';
import { ArrowOutlineButton } from '../Buttons/Outline-Button/Arrow-Button/arrow-button.component';

import * as Styled from './project.styles';

export const Project = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      markdownRemark(frontmatter: { category: { eq: "project section" } }) {
        id
        frontmatter {
          Title
          CTAText
          Slug
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
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
              ProjectImage {
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 510
                    height: 648
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

  const Project = data.markdownRemark.frontmatter;

  return (
    <Styled.ProjectSection>
      <div className="container">
        <Styled.TitleWrapper>
          <Styled.TitleWrapperProject>
            <StaticImage
              style={Styled.StarStd}
              src="../../assets/images/global/star.svg"
              alt="Star Image"
              placeholder="blurred"
              layout="fixed"
              width={124}
              height={124}
            />
            <h3 className="heading-3">{Project.Title}</h3>
          </Styled.TitleWrapperProject>
          <ArrowOutlineButton data={Project} />
        </Styled.TitleWrapper>
        <Styled.ProjectCollectionList>
          {data.allMarkdownRemark.edges.map((project) => (
            <ProjectCard data={project} key={project.node.id} />
          ))}
        </Styled.ProjectCollectionList>
      </div>
    </Styled.ProjectSection>
  );
};
