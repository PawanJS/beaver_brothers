import styled from 'styled-components';

export const CustomerSection = styled.section`
  display: flex;
  padding: 60px 5%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    padding-top: 0;
    padding-bottom: 30px;
  }
`;

export const CustomerLogoGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const CustomerLogo = {
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
};
