import styled from 'styled-components';

export const ProcessSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 3%;
`;

export const ScribbleGreen = {
  position: 'absolute',
  left: '5%',
  top: '30%',
  right: 'auto',
  bottom: 'auto',
  maxWidth: '10%',
};

export const TitleWrap = styled.div`
  position: relative;
  max-width: 510px;
  margin-bottom: 32px;
`;

export const StarImg = {
  position: 'absolute',
  left: '-50px',
  top: '-35px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
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
