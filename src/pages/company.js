import * as React from 'react';

import { Layout } from '../components/Layout/Layout.component';
import { Hero } from '../components/Company-Hero/hero.component';
import { Customer } from '../components/Customer/customer.component';
import { ContentImage } from '../components/Content-Image/content-image.component';
import { Values } from '../components/Values/values.component';
import { Mission } from '../components/Mission/mission.component';
import { Cta } from '../components/CTA/cta.component';
import { Blog } from '../components/Blog/blog.component';
import { Team } from '../components/Team/team.component';

import '../assets/styles/global.scss';

const CompanyPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <Customer />
        <ContentImage />
        <Values />
        <Mission />
        <Cta />
        <Team />
        <Blog />
      </Layout>
    </main>
  );
};

export default CompanyPage;
