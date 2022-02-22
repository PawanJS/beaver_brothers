import { Link } from 'gatsby';
import styled from 'styled-components';

export const Service = styled.section`
  overflow: hidden;
  padding: 50px 3%;
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

export const ServiceGrid = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

export const ServiceCard = styled(Link)`
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dde3e4;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(28, 63, 58);

    .heading-3 {
      color: rgb(255, 255, 255);
    }

    .paragraph {
      color: rgb(221, 227, 228);
    }

    .service-star {
      transform: translate3d(0, 0, 0) !important;
      opacity: 1 !important;
    }

    .button_text_remove {
      color: rgb(236, 232, 217);
    }

    .button_arrow_small {
      filter: invert(100%);
    }
  }
`;

export const FeatureIcon = {
  width: 32,
  marginBottom: 32,
};

export const CardTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 14px;
  color: rgb(16, 34, 38);
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.04em;
  transition: color 0.3s ease-in-out;
`;

export const ServiceParagraph = styled.p`
  color: rgb(72, 91, 96);
  transition: color 0.3s ease-in-out;
`;

export const ServiceStar = {
  position: 'absolute',
  left: 'auto',
  top: 0,
  right: 0,
  bottom: 'auto',
  transform: 'translate3d(40px, -40px, 0px)',
  transformStyle: 'preserve-3d',
  opacity: '0',
  transition: 'all 0.3s ease-in-out',
};

export const ButtonText = styled.div`
  margin-top: 32px;
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  color: #102226;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;

  &:hover {
    .button_arrow_small {
      transform: translateX(4px);
    }
  }
`;

export const ButtonTextRemove = styled.div`
  color: rgb(16, 34, 38);
  transition: color 0.3s ease-in-out;
`;

export const ButtonArrowSmall = {
  marginLeft: 4,
  transition: 'transform 0.3s ease-in-out',
};
