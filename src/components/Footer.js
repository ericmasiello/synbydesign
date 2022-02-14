import React from 'react';
import classNames from 'classnames';
import Container from './Container';
import { AnimatedLink } from './AnimatedLink';
import * as styles from './Footer.module.css';

function Footer(props) {
  const { component = 'footer', className, ...rest } = props;

  const classes = classNames(styles.footer, className);

  return (
    <Container component={component} className={classes} {...rest}>
      <AnimatedLink href="mailto:eric.j.masiello@gmail.com">
        Contact Me{' '}
        <span role="img" aria-label="envolope with heart">
          💌
        </span>
      </AnimatedLink>
    </Container>
  );
}

export default Footer;
