import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Styled from './hero-banner.styles';

export const HeroBanner = () => {
  return (
    <Styled.Hero>
      <Styled.Container>
        <Styled.HeroGrid>
          <Styled.HeroContent>
            <Styled.HeadingNormal>Welcome to Netzila</Styled.HeadingNormal>
            <Styled.HeroTitleWrapper>
              <StaticImage
                style={Styled.HeroStar}
                src="../../assets/images/hero/star.svg"
                alt="Star Image"
                placeholder="blurred"
                layout="fixed"
                width={124}
                height={124}
              />
              <Styled.HeroTitle>
                Elevate your brand with Netzila
              </Styled.HeroTitle>
            </Styled.HeroTitleWrapper>
          </Styled.HeroContent>
        </Styled.HeroGrid>
      </Styled.Container>
    </Styled.Hero>
  );
};
