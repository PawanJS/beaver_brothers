import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './service.styles';

export const Service = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      markdownRemark(frontmatter: { category: { eq: "service section" } }) {
        frontmatter {
          Title
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
      </Styled.ContainerSmall>
    </Styled.Service>
  );
};
