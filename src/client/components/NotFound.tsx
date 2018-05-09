import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../styles/utils';
import { maxWidth, MEDIA_QUERIES, COLORS } from '../styles/vars';
import Type5 from './Type5';
import OfflineIcon from './OfflineIcon';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

export const NotFound: React.SFC<Props> = props => {
  const { className, ...rest } = props;
  return (
    <section className={className} {...rest}>
      <OfflineIcon />
      <Type5 tag="h1">
        Oops! The page you're looking for cannot be found.{' '}
        <Link to="/">Return to our homepage.</Link>
      </Type5>
    </section>
  );
};

NotFound.displayName = 'NotFound';

export default styled(NotFound)`
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
