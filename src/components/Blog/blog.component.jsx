import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';

import { TextButton } from '../Buttons/Text-Button/text-button.component';
import { ArrowOutlineButton } from '../Buttons/Outline-Button/Arrow-Button/arrow-button.component';

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
            <div key={blog.node.id}>
              <Styled.BlogCard to={blog.node.frontmatter.Slug}>
                <Styled.BlogThumbnailWrapper>
                  <GatsbyImage
                    className="blog_image"
                    image={
                      blog.node.frontmatter.Thumbnail.childImageSharp
                        .gatsbyImageData
                    }
                    style={Styled.BlogThumbnail}
                    alt={blog.node.frontmatter.Thumbnail.base}
                  />
                </Styled.BlogThumbnailWrapper>
                <Styled.BlogContentWrapper>
                  <Styled.Tag>{blog.node.frontmatter.Tag}</Styled.Tag>
                  <Styled.BlogTitle>
                    {blog.node.frontmatter.Title}
                  </Styled.BlogTitle>
                  {/* <Styled.BlogCardCTA>
                    {blog.node.frontmatter.CTAText}
                    <StaticImage
                      className="button_arrow"
                      style={Styled.ButtonArrow}
                      src="../../assets/images/global/arrow-green.svg"
                      alt="Branding Image"
                      placeholder="blurred"
                      layout="fixed"
                      width={24}
                      height={24}
                    />
                  </Styled.BlogCardCTA> */}
                  <TextButton data={blog} />
                </Styled.BlogContentWrapper>
              </Styled.BlogCard>
            </div>
          ))}
        </Styled.BlogCollection>
      </div>
    </Styled.BlogSection>
  );
};
