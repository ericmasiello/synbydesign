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

const StyledOfflinePage = styled(OfflinePage)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Header} {
    margin-top: 0;
  }
`;

export default {
  component: StyledOfflinePage,
};
