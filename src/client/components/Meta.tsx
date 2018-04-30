import * as React from 'react';
import { Helmet } from 'react-helmet';

const Meta: React.SFC<{}> = () => (
  <Helmet>
    <title>Syn By Design: Eric Masiello's Portfolio</title>
    <meta
      property="og:title"
      content="Syn By Design: Eric Masiello's Portfolio"
    />
  </Helmet>
);

export default Meta;