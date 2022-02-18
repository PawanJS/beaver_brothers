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
            <Styled.HeroParagraph>
              Unlimited design subscriptions to your business.
            </Styled.HeroParagraph>
            <Styled.ButtonPrimary to="#">
              Get Started
              <StaticImage
                style={Styled.ButtonArrow}
                src="../../assets/images/hero/chevron-right.svg"
                alt="Arrow"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
              />
            </Styled.ButtonPrimary>
            <Styled.HeroDetails>Design you'll 💛 guaranteed</Styled.HeroDetails>
          </Styled.HeroContent>
          <Styled.HeroImage>
            <StaticImage
              style={Styled.HeroPerson}
              src="../../assets/images/hero/hero-person.png"
              alt="Hero Person"
              placeholder="blurred"
              layout="constrained"
            />
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
            <Styled.HeroCTABlock>
              <StaticImage
                style={Styled.CTABg}
                src="../../assets/images/hero/cta-bg.svg"
                alt="CTA BG Image"
                placeholder="blurred"
                layout="constrained"
              />
              <Styled.HeroCTAText>
                Start growing with <Styled.BrandSpan>Netzila</Styled.BrandSpan>
              </Styled.HeroCTAText>
              <Styled.NavBannerButton to="#">
                Learn More
                <StaticImage
                  style={Styled.ArrowSmall}
                  src="../../assets/images/hero/chevron-right.svg"
                  alt="Star Image"
                  placeholder="blurred"
                  layout="fixed"
                  width={24}
                  height={24}
                />
              </Styled.NavBannerButton>
            </Styled.HeroCTABlock>
          </Styled.HeroImage>
        </Styled.HeroGrid>
      </Styled.Container>
    </Styled.Hero>
  );
};
