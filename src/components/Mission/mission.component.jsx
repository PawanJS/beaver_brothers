import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styled from './mission.styles';

export const Mission = () => {
  const data = useStaticQuery(graphql`
    query MissionQuery {
      markdownRemark(frontmatter: { category: { eq: "mission" } }) {
        id
        frontmatter {
          BG {
            childImageSharp {
              gatsbyImageData
            }
            base
          }
          Image {
            base
            childImageSharp {
              gatsbyImageData
            }
          }
          Paragraph_1
          Paragraph_2
          Title_1
          Title_2
        }
      }
    }
  `);

  const Mission = data.markdownRemark.frontmatter;

  return (
    <Styled.Mission>
      <div className="container">
        <Styled.MissionGrid>
          <div>
            <Styled.VisionContent>
              <Styled.MissionTitle className="heading-5">
                {Mission.Title_1}
              </Styled.MissionTitle>
              <Styled.MissionDetails>
                {Mission.Paragraph_1}
              </Styled.MissionDetails>
            </Styled.VisionContent>
            <div>
              <Styled.MissionTitle className="heading-5">
                {Mission.Title_1}
              </Styled.MissionTitle>
              <Styled.MissionDetails>
                {Mission.Paragraph_2}
              </Styled.MissionDetails>
            </div>
          </div>
          <Styled.MissionImageBlock>
            <GatsbyImage
              className="mission_bg"
              image={Mission.BG.childImageSharp.gatsbyImageData}
              alt={Mission.BG.base}
            />
            <GatsbyImage
              className="mission_image"
              style={Styled.MissionImage}
              image={Mission.Image.childImageSharp.gatsbyImageData}
              alt={Mission.Image.base}
            />
            <Styled.WhiteBarTop />
          </Styled.MissionImageBlock>
        </Styled.MissionGrid>
      </div>
    </Styled.Mission>
  );
};
