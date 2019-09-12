import React from 'react';
import * as Sentry from '@sentry/browser';
import classNames from 'classnames';
import styles from './ErrorScreen.scss';
import Link from 'next/link';

const ErrorScreen = props => {
  const { className, resetError, ...rest } = props;
  const classes = classNames(styles.errorScreen, className);

  return (
    <section className={classes} {...rest}>
      <h1>
        Sorry. It looks like there was a problem 🤬
        <button
          onClick={event => {
            event.preventDefault();
            Sentry.showReportDialog();
          }}
        >
          Let us know what went wrong.
        </button>
        <Link href="/">
          <a
            onClick={() => {
              resetError();
            }}
          >
            Or return to our home page
          </a>
        </Link>
      </h1>
    </section>
  );
};

export default ErrorScreen;
