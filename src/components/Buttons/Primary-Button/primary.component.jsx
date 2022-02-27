import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './primary.styles';

export const PrimaryButton = ({ data }) => {
  return (
    <Styled.ButtonPrimary to={data.Slug}>
      {data.CTAText}
      <StaticImage
        className="button_arrow"
        style={Styled.ButtonArrow}
        src="../../../assets/images/global/arrow-white.svg"
        alt="Arrow"
        placeholder="blurred"
        layout="fixed"
        width={24}
        height={24}
      />
    </Styled.ButtonPrimary>
  );
};
