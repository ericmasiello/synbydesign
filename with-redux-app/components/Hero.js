import React from 'react';
import styles from './Hero.scss';
import Muted from './Muted';
import Highlighted from './Highlighted';
import { TypeJumbo } from './Type';

const Hero = () => {
  return (
    <TypeJumbo as="div" className={styles.hero}>
      <div className={styles.heroCopy}>
        <Muted>Freelance</Muted> <Highlighted>Developer</Highlighted>, Trainer
        &amp; Consultant
      </div>
    </TypeJumbo>
  );
};

Hero.displayName = 'Hero';

export default Hero;
