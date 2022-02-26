import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as Styled from './footer.styles';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { category: { eq: "footer" } }) {
        id
        frontmatter {
          Slug
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "footer link" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              Link
              Slug
            }
          }
        }
      }
    }
  `);

  const Footer = data.markdownRemark.frontmatter;

  return (
    <footer>
      <Styled.FooterLinkWrapper>
        <div className="container">
          <Styled.FooterContent>
            <Styled.FooterBrand to={Footer.Slug}>
              <StaticImage
                style={Styled.Logo}
                src="../../assets/images/global/logo.svg"
                alt="Netzila Logo"
                placeholder="blurred"
                layout="fixed"
                width={200}
              />
            </Styled.FooterBrand>
            <Styled.FooterLinkBlock>
              {data.allMarkdownRemark.edges.map((link) => (
                <Styled.FooterLink
                  key={link.node.id}
                  to={link.node.frontmatter.Slug}
                >
                  {link.node.frontmatter.Link}
                </Styled.FooterLink>
              ))}
            </Styled.FooterLinkBlock>
          </Styled.FooterContent>
        </div>
      </Styled.FooterLinkWrapper>
    </footer>
  );
};
