import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '@synbydesign/common-ui/dist/index.css';
import styles from './Layout.module.css';

const FONT_CRITICAL = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap';
const FONTS_NON_CRITICAL =
  'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Source+Sans+Pro&display=swap';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href={FONT_CRITICAL} as="style" />
        {/*
          NOTE: the below <link />s automatically has the following two attributes added to it
          at build time via netlify-plugin-inline-critical-css
          * media="print"
          * onload="this.meida='all'"
          The plugin is configured via Netlify's plugins page https://app.netlify.com/teams/ericmasiello/plugins
        */}
        <link rel="stylesheet" href={FONT_CRITICAL} />
        <link rel="stylesheet" href={FONTS_NON_CRITICAL} />
      </Helmet>
      <main className={styles.content}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
