import React, { useState } from 'react';
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

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);

    isActive
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
  };

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
              hello@beaverbrothers.com
            </Styled.Email>
          </Styled.BrandWrapper>
        </div>
        <Styled.NavMenu
          className={`${isActive ? 'active' : ''} ${
            typeof window !== 'undefined' && window.location.pathname != '/'
              ? 'margin-right-zero'
              : ''
          }`}
        >
          {data.allMarkdownRemark.edges.map((link) => (
            <Styled.NavLink
              to={link.node.frontmatter.Slug}
              key={link.node.id}
              onClick={toggleClass}
            >
              {link.node.frontmatter.Link}
            </Styled.NavLink>
          ))}
          <Styled.NavigationButton
            className={
              typeof window !== 'undefined' && window.location.pathname != '/'
                ? 'active'
                : ''
            }
            to="/"
            onClick={toggleClass}
          >
            Contact
          </Styled.NavigationButton>
        </Styled.NavMenu>
        <Menu onClick={toggleClass} />
      </Styled.NavContainer>
    </Styled.NavBar>
  );
};
