import { Link } from 'gatsby';
import styled from 'styled-components';

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

  @media screen and (max-width: 479px) {
    padding: 15px;
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
