import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavBar = styled.div`
export   position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: flex;
  height: 104px;
  padding-right: 5%;
  padding-left: 5%;
  align-items: stretch;
  background-color: transparent;
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

export const Logo = {
  marginRight: 12,
};

export const LogoText = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -1px;
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
`;

export const NavMenu = styled.div`
  margin-right: 17%;
  display: flex;
  align-items: center;
  white-space: nowrap;
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
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.03em;
  text-decoration: none;

  &:hover {
    border: 1px solid #dde3e4;
  }
`;
