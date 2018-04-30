import * as React from 'react';
import styled from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Logo from '../components/Logo';

interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
}

export const OfflinePage: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Meta />
      <Header>
        <Logo />
      </Header>
      <div>
        <h1>Sorry, we're offline right now.</h1>
      </div>
    </div>
  );
};

OfflinePage.displayName = 'OfflinePage';

export default styled(OfflinePage)``;
