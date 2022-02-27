import { Link } from 'gatsby';
import styled from 'styled-components';

export const Team = styled.section`
  padding: 100px 5% 50px;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export const TeamWrapper = styled(Link)`
  text-decoration: none;
`;

export const TeamImageWrapper = styled.div`
  height: 350px;
  background-color: #f1f3f3;
  display: grid;
  transition: background-color 0.3s ease-in-out;

  .team_bg,
  .team_image {
    grid-area: 1 / 1 / 1 / 1;
    transition: filter 0.3s ease-in-out;
  }

  &:hover {
    background: rgba(236, 232, 217);

    .team_image {
      filter: saturate(100%) !important;
    }
  }
`;

export const TeamMember = {
  width: '100%',
  height: '100%',
  filter: 'saturate(0%)',
  objectFit: 'cover',
};

export const TeamNameWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SmallTitleWrapper = styled.div`
  margin-bottom: 8px;
  color: #102226;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;
