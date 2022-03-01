import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { ArrowOutlineButton } from '../Buttons/Outline-Button/Arrow-Button/arrow-button.component';
import { BlogCard } from '../Blog-Card/blog-card.component';

import * as Styled from './blog.styles';

export const Blog = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        id
        frontmatter {
          Title
          Slug
          CTAText
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              Thumbnail {
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 350
                    height: 300
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              Tag
              Title
              Slug
              CTAText
            }
          }
        }
      }
    }
  `);

  const Blog = data.markdownRemark.frontmatter;

  return (
    <Styled.BlogSection>
      <div className="container-large">
        <Styled.TitleWrapper>
          <Styled.TitleWrapBlog>
            <StaticImage
              style={Styled.StarBlog}
              src="../../assets/images/global/star.svg"
              alt="Star Image"
              placeholder="blurred"
              layout="fixed"
              width={124}
              height={124}
            />
            <h3 className="heading-3">{Blog.Title}</h3>
          </Styled.TitleWrapBlog>
          <ArrowOutlineButton data={Blog} />
        </Styled.TitleWrapper>
        <Styled.BlogCollection>
          {data.allMarkdownRemark.edges.map((blog) => (
            <BlogCard data={blog.node.frontmatter} key={blog.node.id} />
          ))}
        </Styled.BlogCollection>
      </div>
    </Styled.BlogSection>
  );
};
