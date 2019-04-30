import * as React from 'react';
import styled from 'styled-components';
import { LoadingComponentProps } from 'react-loadable';
import { COLORS } from '../styles/vars';
import Button from './Button';

interface Props
  extends React.HTMLProps<HTMLDivElement>,
    LoadingComponentProps {}

export const Loading: React.SFC<Props> = props => {
  const { isLoading, pastDelay, timedOut, error, retry, ...rest } = props;
  let children;
  if (error) {
    children = <Button onClick={retry}>Retry</Button>;
  } else if (timedOut) {
    children = (
      <React.Fragment>
        Hmm. This is taking awhile. <Button onClick={retry}>Retry?</Button>
      </React.Fragment>
    );
  } else if (pastDelay) {
    // only display loading message if its exceeded delay configuration
    children = 'Loading...';
  } else if (!error && !pastDelay && !timedOut) {
    return null;
  }

  return <div {...rest}>{children}</div>;
};

export default styled(Loading)`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  background-color: ${COLORS.highlight};
  color: #fff;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;
