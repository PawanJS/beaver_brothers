import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Menu } from './Menu-icon/menu.component';

import * as Styled from './navbar.styles';

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "navigation" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              Slug
              Link
            }
          }
        }
      }
    }
  `);

  return (
    <Styled.NavBar>
      <Styled.NavContainer>
        <div>
          <Styled.BrandWrapper>
            <Styled.Brand to="/">
              <StaticImage
                src="../../../assets/images/global/logo.svg"
                alt="Netzila Logo"
                placeholder="blurred"
                layout="constrained"
                width={200}
              />
            </Styled.Brand>
            <Styled.NavigationLine />
            <Styled.Email href="https://www.pawanjs.netlify.app">
              hello@netzilatechnologies.com
            </Styled.Email>
          </Styled.BrandWrapper>
        </div>
        <Styled.NavMenu>
          {data.allMarkdownRemark.edges.map((link) => (
            <Styled.NavLink to={link.node.frontmatter.Slug} key={link.node.id}>
              {link.node.frontmatter.Link}
            </Styled.NavLink>
          ))}
        </Styled.NavMenu>
        <Menu />
      </Styled.NavContainer>
    </Styled.NavBar>
  );
};
