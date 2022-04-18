import styled from 'styled-components';

export const Hero = styled.section`
  padding-top: 160px;
  padding-right: 5%;
  padding-left: 5%;
`;

export const ContentBlock = styled.div`
  min-height: 412px;
  margin-top: 200px;
  background-color: #ece8d9;

  @media only screen and (max-width: 580px) {
    margin-top: 20px;
    background-color: transparent;
  }
`;
