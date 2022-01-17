import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button } from '@synbydesign/common-ui';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Button>I am a button</Button>
  </Layout>
);

export default NotFoundPage;
