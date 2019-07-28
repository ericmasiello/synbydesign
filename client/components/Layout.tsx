import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ErrorBoundry from './ErrorBoundry';
import ErrorScreen from './ErrorScreen';
import '../styles/base.scss';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <ErrorBoundry
      render={({ resetError }) => <ErrorScreen resetError={resetError} />}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/list-class">
            <a>List Example</a>
          </Link>{' '}
          |{' '}
          <Link href="/list-fc">
            <a>List Example (as Functional Component)</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </ErrorBoundry>
  </div>
);

export default Layout;
