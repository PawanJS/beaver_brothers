import styled from 'styled-components';

export const ProcessSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 3%;

  @media screen and (max-width: 990px) {
    padding-top: 60px;
    padding-bottom: 60px;

    .scribble-green {
      left: auto !important;
      top: 6% !important;
      right: 11% !important;
      bottom: auto !important;
      max-width: 15% !important;
    }
  }
`;

export const ScribbleGreen = {
  position: 'absolute',
  left: '5%',
  top: '30%',
  right: 'auto',
  bottom: 'auto',
  maxWidth: '10%',
};

export const ProcessLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #dde3e4;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  color: #102226;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const Details = styled.p`
  color: #485b60;
  line-height: 24px;
`;
