import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';

import * as Styled from './project-card.styles';

export const ProjectCard = ({ data }) => {
  return (
    <Styled.ProjectCard>
      <Styled.ProjectBase to={data.Slug}>
        <GatsbyImage
          className="project_img"
          image={data.ProjectImage.childImageSharp.gatsbyImageData}
          style={Styled.ImageCover}
          alt={data.ProjectImage.base}
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
            <Styled.Heading>{data.Title}</Styled.Heading>
            <Styled.ProjectDetails>{data.Paragraph}</Styled.ProjectDetails>
            <TextButton data={data} />
          </div>
        </Styled.ProjectCover>
      </Styled.ProjectBase>
    </Styled.ProjectCard>
  );
};
