import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './arrow-button.styles';

export const ArrowOutlineButton = ({ data }) => {
  return (
    <Styled.ArrowOutlineButton to={data.Slug}>
      {data.CTAText}
      <StaticImage
        className="button_arrow"
        style={Styled.ButtonArrow}
        src="../../assets/images/global/arrow-green.svg"
        alt="Branding Image"
        placeholder="blurred"
        layout="fixed"
        width={24}
        height={24}
      />
    </Styled.ArrowOutlineButton>
  );
};
