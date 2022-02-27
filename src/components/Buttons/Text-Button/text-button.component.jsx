import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './text-button.styles';

export const TextButton = ({ data }) => {
  return (
    <Styled.ButtonText>
      <Styled.ButtonTextRemove className="button_text_remove">
        {data.node.frontmatter.CTAText}
      </Styled.ButtonTextRemove>
      <StaticImage
        className="button_arrow_small"
        style={Styled.ButtonArrowSmall}
        src="../../assets/images/global/arrow-green.svg"
        alt="Branding Image"
        placeholder="blurred"
        layout="fixed"
        width={24}
        height={24}
      />
    </Styled.ButtonText>
  );
};
