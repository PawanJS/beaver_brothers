import styled from 'styled-components';

export const Service = styled.section`
  overflow: hidden;
  padding: 50px 3%;

  @media screen and (max-width: 990px) {
    .d-none {
      display: none;
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  max-width: 490px;
  margin-bottom: 70px;
`;

export const StarStd = {
  position: 'absolute',
  left: -45,
  top: -35,
  right: 'auto',
  bottom: 'auto',
  zIndex: -1,
};

export const ServiceGrid = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 990px) {
    grid-column-gap: 24px;
  }

  @media screen and (max-width: 767px) {
    grid-row-gap: 24px;
    grid-template-columns: 1fr;
  }
`;

export const Scribble = {
  position: 'absolute',
  left: 'auto',
  top: '-5%',
  right: '-20%',
  bottom: 'auto',
};
