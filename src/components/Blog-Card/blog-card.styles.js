import { Link } from 'gatsby';
import styled from 'styled-components';

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

  .text-button {
    margin-top: 0;
  }
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
