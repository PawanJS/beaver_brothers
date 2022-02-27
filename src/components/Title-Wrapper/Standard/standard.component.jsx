import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './standard.styles';

export const TitleWrapperStandard = ({ data }) => {
  return (
    <Styled.TitleWrap>
      <StaticImage
        style={Styled.StarImg}
        src="../../assets/images/global/star.svg"
        alt="Star Image"
        placeholder="blurred"
        layout="fixed"
        width={124}
        height={124}
      />
      <h3 className="heading-3">{data.Title}</h3>
    </Styled.TitleWrap>
  );
};
