import React from 'react';
import * as Styled from './project.styles';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

export const Project = () => {
  return (
    <Styled.ProjectSection>
      <Styled.Container>
        <Styled.TitleWrapper>
          <Styled.TitleWrapperProject>
            <StaticImage
              style={Styled.StarStd}
              src="../../assets/images/project/project-bg.svg"
              alt="Project Image"
              placeholder="blurred"
              layout="fixed"
              width={124}
              height={124}
            />
            <h3 className="heading-3">Check out some great case studies</h3>
          </Styled.TitleWrapperProject>
          <Styled.ProjectCTA to="/">
            Feature Project
            <StaticImage
              className="button_arrow"
              style={Styled.ButtonArrow}
              src="../../assets/images/project/arrow-right.svg"
              alt="Branding Image"
              placeholder="blurred"
              layout="fixed"
              width={24}
              height={24}
            />
          </Styled.ProjectCTA>
        </Styled.TitleWrapper>
        <Styled.ProjectCollectionList>
          <Styled.ListItem>
            <Styled.ProjectBase to="/">
              <StaticImage
                className="project_img"
                style={Styled.ImageCover}
                src="../../assets/images/project/psalms.png"
                alt="Main Image"
                placeholder="blurred"
                layout="fixed"
                width={510}
                height={648}
              />
              <Styled.ProjectCover>
                <StaticImage
                  className="project_star-img"
                  style={Styled.ProjectStarSmall}
                  src="../../assets/images/project/star.svg"
                  alt="Star Image"
                  placeholder="blurred"
                  layout="fixed"
                  width={48}
                  height={48}
                />
                <div className="project_details">
                  <Styled.Heading>PS-Alms</Styled.Heading>
                  <Styled.ProjectDetails>
                    Capturing workplace productivity in a series of candid
                    photoShoots.
                  </Styled.ProjectDetails>
                  <Styled.ProjectCoverCTA>
                    Learn More
                    <StaticImage
                      className="button_arrow_small"
                      style={Styled.ButtonArrowSmall}
                      src="../../assets/images/project/button-arrow.svg"
                      alt="Arrow Image"
                      placeholder="blurred"
                      layout="fixed"
                      width={24}
                      height={24}
                    />
                  </Styled.ProjectCoverCTA>
                </div>
              </Styled.ProjectCover>
            </Styled.ProjectBase>
          </Styled.ListItem>
        </Styled.ProjectCollectionList>
      </Styled.Container>
    </Styled.ProjectSection>
  );
};
