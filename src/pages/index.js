import * as React from 'react';

import { Layout } from '../components/Layout/Layout.component';
import { HeroBanner } from '../components/Hero-Banner/hero-banner.component';
import { Customer } from '../components/Customer/customer.component';
import { Service } from '../components/service/service.component';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <HeroBanner />
        <Customer />
        <Service />
      </Layout>
    </main>
  );
};

export default IndexPage;
