import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './accent.styles';

export const AccentWrapper = ({ data }) => {
  return (
    <Styled.AccentWrapper>
      <StaticImage
        style={Styled.AccentStar}
        src="../../assets/images/global/star.svg"
        alt="Star Image"
        placeholder="blurred"
        layout="fixed"
        width={124}
        height={124}
      />
      <h3 className="heading-3">{data.Title}</h3>
    </Styled.AccentWrapper>
  );
};
