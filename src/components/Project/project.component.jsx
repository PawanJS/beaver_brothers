import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';
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
            <Styled.ListItem key={project.node.id}>
              <Styled.ProjectBase to={project.node.frontmatter.Slug}>
                <GatsbyImage
                  className="project_img"
                  image={
                    project.node.frontmatter.ProjectImage.childImageSharp
                      .gatsbyImageData
                  }
                  style={Styled.ImageCover}
                  alt={project.node.frontmatter.ProjectImage.base}
                />
                <Styled.ProjectCover>
                  <StaticImage
                    className="project_star-img"
                    style={Styled.ProjectStarSmall}
                    src="../../assets/images/global/star.svg"
                    alt="Star Image"
                    placeholder="blurred"
                    layout="fixed"
                    width={48}
                    height={48}
                  />
                  <div className="project_details">
                    <Styled.Heading>
                      {project.node.frontmatter.Title}
                    </Styled.Heading>
                    <Styled.ProjectDetails>
                      {project.node.frontmatter.Paragraph}
                    </Styled.ProjectDetails>
                    <TextButton data={project} />
                  </div>
                </Styled.ProjectCover>
              </Styled.ProjectBase>
            </Styled.ListItem>
          ))}
        </Styled.ProjectCollectionList>
      </div>
    </Styled.ProjectSection>
  );
};
