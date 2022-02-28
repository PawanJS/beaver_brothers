import styled from 'styled-components';

export const Hero = styled.section`
  padding-top: 160px;
  padding-right: 5%;
  padding-left: 5%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeadingNormal = styled.div`
  margin-bottom: 16px;
  color: #485b60;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const AccentBlock = styled.div`
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #102226;
  font-size: 72px;
  line-height: 80px;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const CompanyStar = {
  position: 'absolute',
  left: '-25px',
  top: '-20px',
  right: 'auto',
  bottom: 'auto',
  zIndex: '-1',
  minWidth: '124px',
};

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  margin-top: 96px;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-rows: auto;

  .CompanyImageBlockYellow {
    position: relative;
    min-height: 400px;
    background-color: #ece8d9;
  }

  .CompanyImageBlockGreen {
    position: relative;
    min-height: 400px;
    background-color: #e0eae8;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 60px;
    grid-template-columns: 1fr;
  }
`;

export const CompanyImageGrid = styled.div`
  display: grid;

  .company_image,
  .company_bg {
    grid-area: 1 / 1 / 1 / 1;
  }

  .company_image {
  }

  .company_bg {
  }
`;

export const CompanyImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};
