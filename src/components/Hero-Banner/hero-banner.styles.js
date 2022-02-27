import { Link } from 'gatsby';
import styled from 'styled-components';

export const Hero = styled.section`
  overflow: hidden;
  padding-right: 5%;
  padding-bottom: 60px;
  padding-left: 5%;

  @media screen and (max-width: 990px) {
    padding-top: 160px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 72px;
  grid-row-gap: 72px;

  @media screen and (max-width: 990px) {
    max-width: 560px;
    margin-right: auto;
    margin-left: auto;
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  padding-top: 160px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 990px) {
    padding-top: 0px;
  }
`;

export const HeadingNormal = styled.div`
  margin-bottom: 16px;
  color: #485b60;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const HeroTitleWrapper = styled.div`
  position: relative;
  max-width: 420px;
  margin-bottom: 16px;
`;

export const HeroStar = {
  position: 'absolute',
  left: 'auto',
  top: -14,
  right: -30,
  bottom: 'auto',
  zIndex: -1,
};

export const HeroTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #102226;
  font-size: 72px;
  line-height: 80px;
  font-weight: 700;
  letter-spacing: -0.04em;

  @media screen and (max-width: 479px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const HeroParagraph = styled.p`
  color: #102226;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.03em;
`;

export const HeroDetails = styled.div`
  margin-top: 100px;
  color: #485b60;
  line-height: 24px;

  @media screen and (max-width: 990px) {
    margin-top: 60px;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  background-color: #ece8d9;
`;

export const HeroPerson = {
  position: 'relative',
  zIndex: 2,
};

export const HeroCTABlock = styled.div`
  position: absolute;
  left: auto;
  top: 0%;
  right: -15%;
  bottom: auto;
  z-index: 5;
  display: flex;
  width: 180px;
  min-height: 300px;
  padding: 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #1c3f3a;

  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

export const CTABg = {
  position: 'absolute',
  top: 0,
  right: 0,
};

export const HeroCTAText = styled.div`
  font-family: Inter, sans-serif;
  color: #fff;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
`;

export const BrandSpan = styled.span`
  color: #ece8d9;
`;

export const NavBannerButton = styled(Link)`
  display: flex;
  margin-top: 32px;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  color: #ece8d9;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    .button_arrow {
      transform: translateX(4px);
    }
  }
`;

export const ArrowSmall = {
  marginLeft: 4,
  transition: 'transform 0.3s ease-in-out',
};
