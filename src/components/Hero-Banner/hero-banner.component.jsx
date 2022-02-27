import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styled from './hero-banner.styles';
import { HeroCard } from '../Hero-Card/hero-card.component';
import { PrimaryButton } from '../Buttons/Primary-Button/primary.component';

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
            <PrimaryButton data={Hero} />
            <Styled.HeroDetails>{Hero.TagLine}</Styled.HeroDetails>
          </Styled.HeroContent>
          <Styled.HeroImage>
            <GatsbyImage
              style={Styled.HeroPerson}
              image={Hero.Cover.childImageSharp.gatsbyImageData}
              alt={Hero.Cover.base}
            />
            <HeroCard />
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
