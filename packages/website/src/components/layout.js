import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '@synbydesign/common-ui/dist/index.css';
import styles from './Layout.module.css';

const FONTS = 'https://fonts.googleapis.com/css?family=Lato:400,700|Source+Sans+Pro:300,400,600&display=swap';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href={FONTS} as="style" />
        {/*
          NOTE: the below <link /> automatically has the following two attributes added to it
          at build time via netlify-plugin-inline-critical-css
          * media="print"
          * onload="this.meida='all'"
          The plugin is configured via Netlify's plugins page https://app.netlify.com/teams/ericmasiello/plugins
        */}
        <link rel="stylesheet" href={FONTS} />
      </Helmet>
      <main className={styles.content}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
