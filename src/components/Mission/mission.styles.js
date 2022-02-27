import styled from 'styled-components';

export const Mission = styled.section`
  padding: 50px 5% 100px;
`;

export const MissionGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 92px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
`;

export const VisionContent = styled.div`
  margin-bottom: 60px;
`;

export const MissionTitle = styled.h5`
  margin-bottom: 16px;
`;

export const MissionDetails = styled.p`
  color: #485b60;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.03em;
`;

export const MissionImageBlock = styled.div`
  position: relative;
  min-height: 520px;
  background-color: #e0eae8;
  display: grid;

  .mission_image,
  .mission_bg {
    grid-area: 1 / 1 / 1 / 1;
  }
`;

export const MissionImage = {
  zIndex: '5',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const WhiteBarTop = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 0;
  min-height: 70px;
  background-color: #fff;
`;
