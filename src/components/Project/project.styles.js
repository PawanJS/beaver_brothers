import styled from 'styled-components';

export const ProjectSection = styled.section`
  overflow: hidden;
  padding: 100px 3%;

  @media screen and (max-width: 990px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 810px;
  margin-right: auto;
  margin-bottom: 70px;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleWrapperProject = styled.div`
  position: relative;
  max-width: 510px;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const StarStd = {
  position: 'absolute',
  left: '-45px',
  top: '-35px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
};

export const ProjectCollectionList = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
