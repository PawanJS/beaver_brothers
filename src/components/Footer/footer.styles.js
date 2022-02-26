import { Link } from 'gatsby';
import styled from 'styled-components';

export const FooterLinkWrapper = styled.div`
  padding: 48px 5%;
  background-color: #f1f3f3;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterBrand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
`;

export const Logo = { marginRight: '12px' };

export const FooterLinkBlock = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const FooterLink = styled(Link)`
  padding: 8px 16px;
  justify-content: center;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 200ms ease;
  color: #1c3f3a;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.03em;
  text-decoration: none;

  &:hover {
    border: 1px solid #1c3f3a;
  }
`;
