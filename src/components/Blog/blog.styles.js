import { Link } from 'gatsby';
import styled from 'styled-components';

export const BlogSection = styled.section`
  padding: 140px 5%;

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

export const TitleWrapBlog = styled.div`
  position: relative;
  max-width: 510px;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const StarBlog = {
  position: 'absolute',
  left: '-46px',
  top: '-34px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
};

export const BlogCollection = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled(Link)`
  display: inline-block;
  padding: 24px;
  border: 1px solid #dde3e4;
  transition: border-color 400ms ease;
  text-decoration: none;
  transition: border-color 400ms ease-in-out;

  &:hover {
    border-color: #b4bbbd;

    .blog_image {
      transform: scale(1.08);
    }
  }

  @media screen and (max-width: 479px) {
    padding: 15px;
  }
`;

export const BlogThumbnailWrapper = styled.div`
  overflow: hidden;
  height: 300px;
  margin-bottom: 24px;
`;

export const BlogThumbnail = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 400ms ease-in-out',
};

export const BlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tag = styled.div`
  color: #102226;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const BlogTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  color: #102226;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;
