import { Link } from 'gatsby';
import styled from 'styled-components';

export const Service = styled.section`
  overflow: hidden;
  padding: 100px 3%;
`;

export const ContainerSmall = styled.div`
  position: relative;
  max-width: 920px;
  margin-right: auto;
  margin-left: auto;
`;

export const TitleWrapper = styled.div`
  position: relative;
  max-width: 490px;
  margin-bottom: 70px;
`;

export const StarStd = {
  position: 'absolute',
  left: -45,
  top: -35,
  right: 'auto',
  bottom: 'auto',
  zIndex: -1,
};

export const Heading = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #102226;
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;
