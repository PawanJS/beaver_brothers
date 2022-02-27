import styled from 'styled-components';

export const TitleWrap = styled.div`
  position: relative;
  max-width: 510px;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
    max-width: 400px;
  }
`;

export const StarImg = {
  position: 'absolute',
  left: '-50px',
  top: '-35px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
};
