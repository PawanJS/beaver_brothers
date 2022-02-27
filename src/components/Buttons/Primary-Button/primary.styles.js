import { Link } from 'gatsby';
import styled from 'styled-components';

export const ButtonPrimary = styled(Link)`
  margin-top: 32px;
  display: flex;
  min-height: 48px;
  padding: 12px 10px 12px 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #eff1f5;
  background-color: #26534c;
  transition: background-color 300ms ease;
  font-family: Inter, sans-serif;
  color: #fff;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #1c3f3a;

    .button_arrow {
      transform: translateX(4px);
    }
  }
`;

export const ButtonArrow = {
  marginLeft: 20,
  transition: 'transform 0.3s ease-in-out',
};
