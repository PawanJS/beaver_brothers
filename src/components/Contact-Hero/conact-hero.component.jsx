import React from 'react';

import { TitleWrapper } from '../Title-Wrapper/Global/global.component';
import { Form } from '../Form/form.component';

import * as Styled from './contact-hero.styles';

export const ContactHero = () => {
  return (
    <Styled.Hero>
      <div className="container-large">
        <TitleWrapper />
        <Styled.ContentBlock>
          <Form />
        </Styled.ContentBlock>
      </div>
    </Styled.Hero>
  );
};
