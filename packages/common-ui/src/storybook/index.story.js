import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.scss';
import styles from './indexStory.module.scss';

storiesOf('Welcome', module).add('to <Placeholder Title Goes Here>', () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>Placeholder Title Goes Here</h1>
    </header>
  </div>
));
