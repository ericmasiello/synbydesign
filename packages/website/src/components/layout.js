import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './Header';
import './layout.css';
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
      <Header />
      <main className={styles.content}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
