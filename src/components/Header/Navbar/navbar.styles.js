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

  @media only screen and (max-width: 525px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  margin-right: 17%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 0.5s ease-in-out;

  &.margin-right-zero {
    margin-right: 0;
  }

  @media only screen and (max-width: 1200px) {
    margin-right: 12%;

    &.margin-right-zero {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 990px) {
    margin-right: 0;
    flex-direction: column;
    position: absolute;
    top: 104px;
    left: 0;
    right: 0;
    background: #fff;
    height: 100vh;
    padding: 40px 20px;
    transform: translateX(calc(-100%));

    &.active {
      transform: translate(0);
    }
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
`;

export const NavigationButton = styled(Link)`
  min-height: 48px;
  margin-left: 8px;
  padding: 12px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #eff1f5;
  background-color: #26534c;
  transition: all 300ms ease;
  font-family: Inter, sans-serif;
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  display: none;

  &.active {
    display: flex;
  }

  &:hover {
    background-color: #f7f8fa;
    color: #1c3f3a;
  }
`;
