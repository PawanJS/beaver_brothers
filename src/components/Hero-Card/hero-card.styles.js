import styled from 'styled-components';

export const HeroCard = styled.div`
  position: absolute;
  left: -76px;
  top: auto;
  right: auto;
  bottom: 56px;
  z-index: 5;
  display: flex;
  padding: 28px 32px;
  align-items: center;
  background-color: #fff;
  box-shadow: 51px 51px 72px -12px rgba(117, 114, 104, 0.16);
  animation: bounce 1.3s infinite alternate;

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-18px);
    }
  }

  @media screen and (max-width: 767px) {
    left: 32px;
    bottom: 60px;
  }

  @media screen and (max-width: 479px) {
    left: 20px;
    bottom: 40px;
    padding-right: 24px;
    padding-left: 24px;
    flex-wrap: wrap;
  }
`;

export const UiCardHeading = styled.h5`
  color: #102226;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const UiCardText = styled.p`
  font-family: Inter, sans-serif;
  color: #485b60;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const HeroCardStar = {
  marginRight: 24,
};
