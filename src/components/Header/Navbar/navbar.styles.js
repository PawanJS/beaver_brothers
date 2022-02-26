import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavBar = styled.nav`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: flex;
  height: 104px;
  padding-right: 5%;
  padding-left: 5%;
  align-items: stretch;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  width: 100%;
  max-width: 1260px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
`;

export const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: #333333;
`;

export const NavigationLine = styled.div`
  width: 1px;
  height: 14px;
  margin-right: 16px;
  margin-left: 16px;
  background-color: #dde3e4;
`;

export const Email = styled.a`
  color: #485b60;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: none;
  font-family: 'Open Sauce Sans', sans-serif;
`;

export const NavMenu = styled.div`
  margin-right: 17%;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media only screen and (max-width: 1200px) {
    margin-right: 12%;
  }

  @media only screen and (max-width: 990px) {
    margin-right: 0;
    flex-direction: column;
    position: absolute;
    top: 104px;
    left: 0;
    right: 0;
    background: #1c3f3a;
    padding: 20px;
    align-items: flex-start;

    display: none;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 4px;
  margin-left: 4px;
  padding: 8px 16px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 200ms ease;
  font-family: Inter, sans-serif;
  color: #1c3f3a;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.03em;
  text-decoration: none;

  &:hover {
    border: 1px solid #1c3f3a;
  }

  @media only screen and (max-width: 990px) {
    color: #fff;
  }
`;
