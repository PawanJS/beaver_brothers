import styled from 'styled-components';

export const ButtonText = styled.div`
  margin-top: 32px;
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  color: #102226;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    .button_arrow_small {
      transform: translateX(4px);
    }
  }
`;

export const ButtonTextRemove = styled.div`
  color: rgb(16, 34, 38);
  transition: color 0.3s ease-in-out;
`;

export const ButtonArrowSmall = {
  marginLeft: 4,
  transition: 'transform 0.3s ease-in-out',
};
