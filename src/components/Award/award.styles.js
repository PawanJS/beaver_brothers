import styled from 'styled-components';
import { Link } from 'gatsby';

export const AwardSection = styled.section`
  overflow: hidden;
  padding: 60px 3%;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 620px;
  margin-right: auto;
  margin-bottom: 82px;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StarAward = {
  position: 'absolute',
  zIndex: '-1',
};

export const AwardGrid = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  @media screen and (max-width: 1200px) {
    gap: 20px;
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 525px) {
    grid-template-columns: 1fr;
  }
`;

export const AwardCard = styled(Link)`
  padding: 40px;
  border: 1px solid #dde3e4;
  text-decoration: none;

  @media screen and (max-width: 1200px) {
    padding: 20px;
  }
`;

export const AwardLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #dde3e4;
`;

export const AwardBrand = styled.div`
  margin-bottom: 8px;
  color: #485b60;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const AwardTitle = styled.div`
  color: #102226;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;
