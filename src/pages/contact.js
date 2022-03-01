import * as React from 'react';

import { Layout } from '../components/Layout/Layout.component';
import { ContactHero } from '../components/Contact-Hero/conact-hero.component';
import { Testimonial } from '../components/Testimonial/testimonial.component';
import { Cta } from '../components/CTA/cta.component';
import { Blog } from '../components/Blog/blog.component';

import '../assets/styles/global.scss';

const CompanyPage = () => {
  return (
    <main>
      <Layout>
        <ContactHero />
        <Testimonial />
        <Cta />
        <Blog />
      </Layout>
    </main>
  );
};

export default CompanyPage;
