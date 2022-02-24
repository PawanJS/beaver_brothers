import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './process.styles';

export const Process = () => {
  const data = useStaticQuery(graphql`
    query ProcessQuery {
      markdownRemark(frontmatter: { category: { eq: "process section" } }) {
        id
        frontmatter {
          Title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "process" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              Title
              Paragraph
            }
          }
        }
      }
    }
  `);

  const Process = data.markdownRemark.frontmatter;

  return (
    <Styled.ProcessSection>
      <StaticImage
        style={Styled.ScribbleGreen}
        src="../../assets/images/global/squiggle.svg"
        alt="Scribble Image"
        placeholder="blurred"
        layout="fixed"
        width={142}
        height={142}
      />
      <div className="container-extra-small">
        <Styled.TitleWrap>
          <StaticImage
            style={Styled.StarImg}
            src="../../assets/images/global/star.svg"
            alt="Star Image"
            placeholder="blurred"
            layout="fixed"
            width={124}
            height={124}
          />
          <h4 className="heading-4">{Process.Title}</h4>
          <div>
            {data.allMarkdownRemark.edges.map((process) => (
              <div key={process.node.id}>
                <Styled.ProcessLine />
                <div>
                  <Styled.Title>{process.node.frontmatter.Title}</Styled.Title>
                  <Styled.Details>
                    {process.node.frontmatter.Paragraph}
                  </Styled.Details>
                </div>
              </div>
            ))}
          </div>
        </Styled.TitleWrap>
      </div>
    </Styled.ProcessSection>
  );
};
