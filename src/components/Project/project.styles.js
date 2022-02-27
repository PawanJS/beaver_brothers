import { Link } from 'gatsby';
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

export const ListItem = styled.div``;

export const ProjectBase = styled(Link)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 648px;
  max-width: 100%;
  display: inline-block;

  &:hover .project_img {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 990px) {
    height: 500px;
  }
`;

export const ImageCover = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: `transform 0.7s ease-in-out`,
};

export const ProjectCover = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: background-color 0.7s ease-in-out;

  .project_star-img,
  .project_details {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
  }

  &:hover {
    background-color: rgba(28, 63, 58, 0.96);

    .project_star-img,
    .project_details {
      opacity: 1;
    }

    .button_text_remove {
      color: rgb(236, 232, 217);
    }

    .button_arrow_small {
      filter: invert(100%);
    }
  }
`;

export const ProjectStarSmall = { width: '48px' };

export const Heading = styled.h5`
  margin-bottom: 8px;
  color: #f1f3f3;
  margin-top: 0px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const ProjectDetails = styled.p`
  color: #b4bbbd;
`;
