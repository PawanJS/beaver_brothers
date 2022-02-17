import styled from 'styled-components';
import { Link } from 'gatsby';

export const Hero = styled.section`
  overflow: hidden;
  padding-right: 5%;
  padding-bottom: 60px;
  padding-left: 5%;
`;

export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1060px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 72px;
  grid-row-gap: 72px;
`;

export const HeroContent = styled.div`
  padding-top: 160px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
`;

export const HeroParagraph = styled.p`
  color: #102226;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.03em;
`;
