import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styled from './hero-banner.styles';

export const HeroBanner = () => {
  const data = useStaticQuery(graphql`
    query HeroBannerQuery {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          category
          Slug
          CTAText
          HeroBannerBrand
          HeroBannerCTALink
          HeroBannerCTAText
          HeroBannerText
          UiCardHeading
          UiCardText
          Subtitle
          TagLine
          Title
          WelcomeText
          Cover {
            base
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `);

  const Hero = data.markdownRemark.frontmatter;

  return (
    <Styled.Hero>
      <div className="container">
        <Styled.HeroGrid>
          <Styled.HeroContent>
            <Styled.HeadingNormal>{Hero.WelcomeText}</Styled.HeadingNormal>
            <Styled.HeroTitleWrapper>
              <StaticImage
                style={Styled.HeroStar}
                src="../../assets/images/global/star.svg"
                alt="Star Image"
                placeholder="blurred"
                layout="fixed"
                width={124}
                height={124}
              />
              <Styled.HeroTitle>{Hero.Title}</Styled.HeroTitle>
            </Styled.HeroTitleWrapper>
            <Styled.HeroParagraph>{Hero.Subtitle}</Styled.HeroParagraph>
            <Styled.ButtonPrimary to={Hero.Slug}>
              {Hero.CTAText}
              <StaticImage
                className="button_arrow"
                style={Styled.ButtonArrow}
                src="../../assets/images/global/arrow-white.svg"
                alt="Arrow"
                placeholder="blurred"
                layout="fixed"
                width={24}
                height={24}
              />
            </Styled.ButtonPrimary>
            <Styled.HeroDetails>{Hero.TagLine}</Styled.HeroDetails>
          </Styled.HeroContent>
          <Styled.HeroImage>
            <GatsbyImage
              style={Styled.HeroPerson}
              image={Hero.Cover.childImageSharp.gatsbyImageData}
              alt={Hero.Cover.base}
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
                <Styled.UiCardHeading>
                  {Hero.UiCardHeading}
                </Styled.UiCardHeading>
                <Styled.UiCardText>{Hero.UiCardText}</Styled.UiCardText>
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
                {Hero.HeroBannerText}
                <Styled.BrandSpan> {Hero.HeroBannerBrand}</Styled.BrandSpan>
              </Styled.HeroCTAText>
              <Styled.NavBannerButton to={Hero.HeroBannerCTALink}>
                {Hero.HeroBannerCTAText}
                <StaticImage
                  className="button_arrow"
                  style={Styled.ArrowSmall}
                  src="../../assets/images/global/arrow-cream.svg"
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
      </div>
    </Styled.Hero>
  );
};
