import * as React from 'react';
import Logo from './Logo';

const HeaderOnline: React.SFC<{}> = () => {
  return (
    <div>
      <Logo tag="h1" aria-label="Syn By Design: Eric Masiello's Portfolio" />
      Header online
    </div>
  );
};

HeaderOnline.displayName = 'HeaderOnline';

export default HeaderOnline;
