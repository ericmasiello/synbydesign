import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
}

export const Offline: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Sorry, we're offline right now.</h1>
    </div>
  );
};

Offline.displayName = 'Offline';

export default styled(Offline)``;
