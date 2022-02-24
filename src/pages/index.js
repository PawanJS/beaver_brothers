import * as React from 'react';

import { Layout } from '../components/Layout/Layout.component';
import { HeroBanner } from '../components/Hero-Banner/hero-banner.component';
import { Customer } from '../components/Customer/customer.component';
import { Service } from '../components/Service/service.component';
import { Project } from '../components/Project/project.component';
import { Process } from '../components/Process/process.component';
import { Award } from '../components/award/award.component';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <HeroBanner />
        <Customer />
        <Service />
        <Project />
        <Process />
        <Award />
      </Layout>
    </main>
  );
};

export default IndexPage;
