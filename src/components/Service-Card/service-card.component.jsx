import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';

import * as Styled from './service-card-styles';

export const ServiceCard = ({ data }) => {
  return (
    <Styled.ServiceCard to={data.Slug}>
      <GatsbyImage
        image={data.Icon.childImageSharp.gatsbyImageData}
        style={Styled.FeatureIcon}
        alt={data.Icon.base}
      />
      <Styled.CardTitle className="heading-3">{data.Title}</Styled.CardTitle>
      <Styled.ServiceParagraph className="paragraph">
        {data.Paragraph}
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
      <TextButton data={data} />
    </Styled.ServiceCard>
  );
};
