import { Link } from 'gatsby';
import styled from 'styled-components';

export const BlogSection = styled.section`
  padding: 140px 5%;
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
`;

export const TitleWrapBlog = styled.div`
  position: relative;
  max-width: 510px;
`;

export const StarBlog = {
  position: 'absolute',
  left: '-46px',
  top: '-34px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
};

export const BlogCTA = styled(Link)`
  display: flex;
  min-height: 40px;
  padding: 8px 8px 8px 24px;
  align-items: center;
  border: 1px solid #1c3f3a;
  transition: border-color 400ms ease, background-color 400ms ease;
  font-family: Inter, sans-serif;
  color: #1c3f3a;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    border-color: rgba(28, 63, 58, 0);
    background-color: #e0eae8;

    .button_arrow {
      transform: translate(4px);
    }
  }
`;

export const ButtonArrow = {
  marginLeft: '10px',
  transition: 'transform 0.3s ease-in-out',
};

export const BlogCollection = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
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

export const BlogCardCTA = styled.div`
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  color: #102226;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    .button_arrow {
      transform: translate(4px);
    }
  }
`;

export const ButtonArrowSmall = {
  marginLeft: '4px',
  transition: 'transform 0.3s ease-in-out',
};
