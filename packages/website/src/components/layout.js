import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import '@synbydesign/common-ui/dist/index.css';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Source+Sans+Pro:300,400,600&display=swap"
        />
      </Helmet>
      <main className={styles.content}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
