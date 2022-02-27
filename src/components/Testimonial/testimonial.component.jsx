import React from 'react';
import Slider from 'react-slick';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import { TitleWrapperStandard } from '../Title-Wrapper/Standard/standard.component';

import * as Styled from './testimonial.styles';
import './slick.scss';

export const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      markdownRemark(frontmatter: { category: { eq: "testimonial section" } }) {
        id
        frontmatter {
          Title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "testimonial" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              TestimonialImage {
                base
                childImageSharp {
                  gatsbyImageData(
                    width: 484
                    height: 488
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              Testimonial
              TestimonialRole
              TestimonialName
            }
          }
        }
      }
    }
  `);

  const Testimonial = data.markdownRemark.frontmatter;

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Styled.TestimonialSlider>
      <div className="container">
        <TitleWrapperStandard data={Testimonial} />
        <Styled.SlideContainer>
          <Slider {...settings}>
            {data.allMarkdownRemark.edges.map((testimonial) => (
              <Styled.Slide key={testimonial.node.id}>
                <Styled.SlideGrid>
                  <Styled.TestimonialImageWrapper>
                    <GatsbyImage
                      image={
                        testimonial.node.frontmatter.TestimonialImage
                          .childImageSharp.gatsbyImageData
                      }
                      style={Styled.TestimonialImage}
                      alt={testimonial.node.frontmatter.TestimonialImage.base}
                    />
                  </Styled.TestimonialImageWrapper>
                  <div>
                    <StaticImage
                      style={Styled.Quote}
                      src="../../assets/images/testimonial/quote-Right.svg"
                      alt="Quote Image"
                      placeholder="blurred"
                      layout="fixed"
                      width={32}
                      height={32}
                    />
                    <Styled.QuoteText>
                      {testimonial.node.frontmatter.Testimonial}
                    </Styled.QuoteText>
                    <StaticImage
                      style={Styled.Quote}
                      src="../../assets/images/testimonial/quote-Left.svg"
                      alt="Quote Image"
                      placeholder="blurred"
                      layout="fixed"
                      width={32}
                      height={32}
                    />
                    <div>
                      <Styled.TestimonialName>
                        {testimonial.node.frontmatter.TestimonialName}
                      </Styled.TestimonialName>
                      <Styled.TestimonialRole>
                        {testimonial.node.frontmatter.TestimonialRole}
                      </Styled.TestimonialRole>
                    </div>
                  </div>
                </Styled.SlideGrid>
              </Styled.Slide>
            ))}
          </Slider>
        </Styled.SlideContainer>
      </div>
    </Styled.TestimonialSlider>
  );
};
