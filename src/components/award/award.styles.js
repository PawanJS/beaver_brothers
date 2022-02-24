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
`;

export const AwardCard = styled.div`
  padding: 40px;
  border: 1px solid #dde3e4;
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

export const AwardCTA = styled(Link)`
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  color: #102226;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  font-size: 14px;

  &:hover .button_arrow {
    transform: translateX(4px);
  }
`;

export const AwardArrow = {
  marginLeft: '4px',
  transition: 'transform 0.3s ease-in-out',
};
