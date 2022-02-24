import styled from 'styled-components';

export const CustomerSection = styled.section`
  display: flex;
  padding: 100px 5%;
  justify-content: center;
  align-items: center;
`;

export const CustomerLogoGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
`;

export const CustomerLogo = {
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
};
