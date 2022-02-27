import styled from 'styled-components';
import { Link } from 'gatsby';

export const CTASection = styled.section`
  padding: 40px 5%;
`;

export const CTABg = {
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: 0,
};

export const CTABlock = styled.div`
  display: flex;
  min-height: 412px;
  padding: 100px;
  align-items: center;
  background-color: #1c3f3a;

  @media screen and (max-width: 990px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 990px) {
    padding: 100px 15px 50px;
  }
`;

export const CTAGrid = styled.div`
  width: 100%;
  max-width: 800px;
  grid-template-rows: auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 16px;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 479px) {
    position: relative;
    z-index: 9;
  }
`;

export const Heading = styled.h2`
  color: #fff;
`;

export const CTASpan = styled.span`
  color: #cbc7b5;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CTAParagraph = styled.p`
  margin-bottom: 32px;
  color: #fff;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.03em;
`;

export const CTAButton = styled(Link)`
  display: flex;
  padding: 8px 8px 8px 24px;
  align-items: center;
  border: 1px solid #f1f3f3;
  color: #fff;
  text-decoration: none;

  &:hover {
    .button_arrow {
      transform: translateX(4px);
    }
  }
`;

export const ButtonArrow = {
  marginLeft: '10px',
  transition: 'transform 0.3s ease-in-out',
};
