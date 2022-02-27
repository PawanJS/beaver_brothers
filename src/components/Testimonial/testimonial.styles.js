import styled from 'styled-components';

export const TestimonialSlider = styled.section`
  padding: 100px 5%;

  @media screen and (max-width: 990px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  max-width: 510px;
  margin-bottom: 32px;
`;

export const TestimonialStar = {
  position: 'absolute',
  left: '-48px',
  top: '-34px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
};

export const SlideContainer = styled.div`
  height: 100%;
  margin-top: 80px;
  background-color: transparent;
`;

export const Slide = styled.div`
  height: 100%;
`;

export const SlideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-column-gap: 92px;
  grid-row-gap: 42px;
  grid-template-rows: auto;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialImageWrapper = styled.div`
  height: 488px;
`;

export const TestimonialImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const Quote = { marginBottom: '32px' };

export const QuoteText = styled.div`
  max-width: 380px;
  margin-bottom: 32px;
  color: #102226;
  font-size: 24px;
  line-height: 40px;
  font-weight: 500;
`;

export const TestimonialName = styled.div`
  font-family: Inter, sans-serif;
  color: #102226;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.7px;
`;

export const TestimonialRole = styled.div`
  margin-bottom: 0px;
  font-family: Inter, sans-serif;
  color: #485b60;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.01em;
`;
