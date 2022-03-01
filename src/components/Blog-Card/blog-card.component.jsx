import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';

import * as Styled from './blog-card.styles';

export const BlogCard = ({ data }) => {
  return (
    <div>
      <Styled.BlogCard to={data.Slug}>
        <Styled.BlogThumbnailWrapper>
          <GatsbyImage
            className="blog_image"
            image={data.Thumbnail.childImageSharp.gatsbyImageData}
            style={Styled.BlogThumbnail}
            alt={data.Thumbnail.base}
          />
        </Styled.BlogThumbnailWrapper>
        <Styled.BlogContentWrapper>
          <Styled.Tag>{data.Tag}</Styled.Tag>
          <Styled.BlogTitle>{data.Title}</Styled.BlogTitle>
          <TextButton data={data} />
        </Styled.BlogContentWrapper>
      </Styled.BlogCard>
    </div>
  );
};
