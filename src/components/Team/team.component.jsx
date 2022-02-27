import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

import { AccentWrapper } from '../Title-Wrapper/Accent/accent.component';

import * as Styled from './team.styles';

export const Team = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      markdownRemark(frontmatter: { category: { eq: "team section" } }) {
        id
        frontmatter {
          Title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "member" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              Image {
                childImageSharp {
                  gatsbyImageData
                }
                base
              }
              Name
              Post
              Slug
            }
          }
        }
      }
    }
  `);

  const Team = data.markdownRemark.frontmatter;

  return (
    <Styled.Team>
      <div className="container-large">
        <div className="container">
          <AccentWrapper data={Team} />
        </div>
        <Styled.TeamGrid>
          {data.allMarkdownRemark.edges.map((member) => (
            <Styled.TeamWrapper
              key={member.node.id}
              to={member.node.frontmatter.Slug}
            >
              <Styled.TeamImageWrapper>
                <StaticImage
                  style={Styled.TeamMember}
                  className="team_bg"
                  src="../../assets/images/global/vector.svg"
                  alt="Star Image"
                  placeholder="blurred"
                  layout="fixed"
                  width={124}
                  height={124}
                />
                <GatsbyImage
                  className="team_image"
                  image={
                    member.node.frontmatter.Image.childImageSharp
                      .gatsbyImageData
                  }
                  style={Styled.TeamMember}
                  alt={member.node.frontmatter.Image.base}
                />
              </Styled.TeamImageWrapper>
              <Styled.TeamNameWrapper>
                <Styled.SmallTitleWrapper>
                  {member.node.frontmatter.Name}
                </Styled.SmallTitleWrapper>
                <p>{member.node.frontmatter.Post}</p>
              </Styled.TeamNameWrapper>
            </Styled.TeamWrapper>
          ))}
        </Styled.TeamGrid>
      </div>
    </Styled.Team>
  );
};
