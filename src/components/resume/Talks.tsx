import React from 'react';
import classNames from 'classnames';
import { PlainList } from '../PlainList';
import { Text } from '../Type';
import { Timeline } from './Timeline';
import type { ReactNode } from 'react';
import type { FlexibleComponent } from '../../@types/FlexibleComponent';
import * as styles from './Talks.module.css';

type Talk = {
  title?: string;
  description?: string;
  url?: string;
  year?: string;
};

type Props = {
  children: ReactNode;
  className?: string;
  talks: Talk[];
};

export const Talks = (props: FlexibleComponent<'ul', Props>) => {
  const { component = 'ul', talks, className, ...rest } = props;
  const classes = classNames(styles.talks, className);
  return (
    <PlainList component={component} className={classes} {...rest}>
      {talks.map((talk) => {
        const composedTitle = talk.year ? (
          <>
            {talk.title} <Timeline>{talk.year}</Timeline>
          </>
        ) : (
          talk.title
        );
        return (
          <li key={talk.title}>
            <Text component="h4" className={styles.title}>
              {talk.url ? <a href={talk.url}>{composedTitle}</a> : talk.title}
            </Text>
            {talk.description}
          </li>
        );
      })}
    </PlainList>
  );
};
