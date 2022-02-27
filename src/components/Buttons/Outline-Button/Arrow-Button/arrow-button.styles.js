import { Link } from 'gatsby';
import styled from 'styled-components';

export const ArrowOutlineButton = styled(Link)`
  display: -webkit-box;
  display: flex;
  min-height: 40px;
  padding: 8px 8px 8px 24px;
  align-items: center;
  border: 1px solid #1c3f3a;
  transition: border-color 400ms ease, background-color 400ms ease;
  font-family: Inter, sans-serif;
  color: #1c3f3a;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    border-color: rgba(28, 63, 58, 0);
    background-color: #e0eae8;

    .button_arrow {
      transform: translate(4px);
    }
  }
`;

export const ButtonArrow = {
  marginLeft: 10,
  transition: 'transform 0.3s ease-in-out',
};
