import * as React from 'react';
import styled from 'styled-components';
import * as Sentry from '@sentry/browser';
import { pxToRem } from '../styles/utils';
import { maxWidth, MEDIA_QUERIES, COLORS } from '../styles/vars';
import Type5 from './Type5';
import OfflineIcon from './OfflineIcon';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  resetError: () => void;
}

export const PageError: React.SFC<Props> = props => {
  const { className, resetError, ...rest } = props;
  return (
    <section className={className} {...rest}>
      <OfflineIcon />
      <Type5 tag="h1">
        Sorry. It looks like there was a problem 🤬
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
            Sentry.showReportDialog();
          }}
        >
          Let us know what went wrong.
        </a>
        <Link
          to="/"
          onClick={() => {
            resetError();
          }}
        >
          Or return to our home page
        </Link>
      </Type5>
    </section>
  );
};

PageError.displayName = 'PageError';

export default styled(PageError)`
  max-width: ${pxToRem(maxWidth)};
  margin: 0 auto;
  text-align: center;
  padding: 3rem 2.5rem;

  ${OfflineIcon} {
    width: 5rem;
    height: 5rem;
    fill: ${COLORS.highlight};
    margin-bottom: 1rem;
  }

  a {
    display: block;
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
