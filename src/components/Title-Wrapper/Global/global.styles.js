import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Heading = styled.div`
  margin-bottom: 16px;
  color: #485b60;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Title = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #102226;
  font-size: 72px;
  line-height: 80px;
  font-weight: 700;
  letter-spacing: -0.04em;

  @media only screen and (max-width: 580px) {
    font-size: 34px;
    line-height: 60px;
  }
`;
