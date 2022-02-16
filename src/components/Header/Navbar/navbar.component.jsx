import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { links } from '../../../data/navigation/navigation';
import * as Styled from './navbar.styles';

export const Navbar = () => {
  return (
    <Styled.NavBar>
      <Styled.NavContainer>
        <div>
          <Styled.BrandWrapper>
            <Styled.Brand to="/">
              <StaticImage
                style={Styled.Logo}
                src="../../../images/navigation/logo.svg"
                alt="Netzila Logo"
                placeholder="blurred"
                layout="fixed"
                width={40}
                height={40}
              />
              <Styled.LogoText>Netzila</Styled.LogoText>
            </Styled.Brand>
            <Styled.NavigationLine />
            <Styled.Email href="https://www.pawanjs.netlify.app">
              hello@netzilatechnologies.com
            </Styled.Email>
          </Styled.BrandWrapper>
        </div>
        <Styled.NavMenu>
          {links.map(({ id, link, slug }) => (
            <Styled.NavLink to={link} key={id}>
              {link}
            </Styled.NavLink>
          ))}
        </Styled.NavMenu>
      </Styled.NavContainer>
    </Styled.NavBar>
  );
};
