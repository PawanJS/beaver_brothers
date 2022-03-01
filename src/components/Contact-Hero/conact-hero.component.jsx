import React from 'react';
import { TitleWrapper } from '../Title-Wrapper/Global/global.component';

import * as Styled from './contact-hero.styles';

export const ContactHero = () => {
  return (
    <Styled.Hero>
      <div className="container-large">
        <TitleWrapper />
      </div>
    </Styled.Hero>
  );
};
