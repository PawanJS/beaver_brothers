import styled from 'styled-components';

export const ContentImage = styled.section`
  padding: 100px 5%;

  @media screen and (max-width: 990px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const CompanyGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  grid-template-columns: minmax(200px, 440px) 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 990px) {
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;

export const CompanyImageWrapper = styled.div`
  position: relative;
`;

export const CompanyImage = {
  position: 'relative',
  zIndex: '5',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const CompanyContentWrapper = styled.div`
  display: flex;
  max-width: 360px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .content_cta {
    margin-top: 40px;
  }
`;

export const BodyLarge = styled.p`
  color: #102226;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.03em;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
