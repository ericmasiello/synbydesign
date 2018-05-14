import * as React from 'react';
import { Helmet } from 'react-helmet';

const Meta: React.SFC<{}> = () => (
  <Helmet>
    <title>Syn By Design: Eric Masiello's Portfolio</title>
    <meta
      name="og_title"
      property="og:title"
      content="Syn By Design: Eric Masiello's Portfolio"
    />
    <meta name="og_site_name" property="og:site_name" content="Syn By Design" />
    <meta name="apple-mobile-web-app-title" content="Syn By Design" />
    <meta name="apple-mobile-web-app-capable" content="no" />
  </Helmet>
);

export default Meta;
