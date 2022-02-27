import * as React from 'react';

import { Layout } from '../components/Layout/Layout.component';
import { Project } from '../components/Project/project.component';
import { Process } from '../components/Process/process.component';
import { Cta } from '../components/CTA/cta.component';
import { Testimonial } from '../components/Testimonial/testimonial.component';

import '../assets/styles/global.scss';

const WorksPage = () => {
  return (
    <main>
      <Layout>
        <div style={{ paddingTop: 100 }}>
          <Project />
          <Process />
          <Cta />
          <Testimonial />
        </div>
      </Layout>
    </main>
  );
};

export default WorksPage;
