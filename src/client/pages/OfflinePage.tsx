import * as React from 'react';
import styled from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Offline from '../components/Offline';

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
      <Offline />
    </div>
  );
};

OfflinePage.displayName = 'OfflinePage';

export default styled(OfflinePage)``;
