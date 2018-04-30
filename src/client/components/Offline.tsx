import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../styles/utils';
import { maxWidth, MEDIA_QUERIES, COLORS } from '../styles/vars';
import Type5 from './Type5';
import OfflineIcon from './OfflineIcon';

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

export const Offline: React.SFC<Props> = props => {
  const { className, ...rest } = props;
  return (
    <section className={className} {...rest}>
      <OfflineIcon />
      <Type5 tag="h1">Sorry, we're offline right now.</Type5>
    </section>
  );
};

Offline.displayName = 'Offline';

export default styled(Offline)`
  max-width: ${pxToRem(maxWidth)};
  margin: 0 auto;
  text-align: center;
  padding: 0 2.5rem;

  ${OfflineIcon} {
    width: 5rem;
    height: 5rem;
    fill: ${COLORS.highlight};
    margin-bottom: 1rem;
  }

  @media (min-width: ${pxToRem(MEDIA_QUERIES.large)}) {
    display: flex;
    align-items: center;

    ${OfflineIcon} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;
