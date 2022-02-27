import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './hero-card.styles';

export const HeroCard = () => {
  return (
    <Styled.HeroCard>
      <StaticImage
        style={Styled.HeroCardStar}
        src="../../assets/images/hero/card-star.svg"
        alt="Star Image"
        placeholder="blurred"
        layout="fixed"
        width={56}
        height={56}
      />
      <div>
        <Styled.UiCardHeading>+480</Styled.UiCardHeading>
        <Styled.UiCardText>Happy Customer</Styled.UiCardText>
      </div>
    </Styled.HeroCard>
  );
};
