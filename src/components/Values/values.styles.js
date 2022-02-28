import styled from 'styled-components';

export const Values = styled.section`
  padding: 50px 5% 100px;

  @media screen and (max-width: 990px) {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  display: flex;
  overflow: hidden;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dde3e4;
  text-decoration: none;
`;

export const ValueIcon = { width: '32px', marginBottom: '32px' };

export const ValueTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 14px;
  color: #102226;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.04em;
`;
