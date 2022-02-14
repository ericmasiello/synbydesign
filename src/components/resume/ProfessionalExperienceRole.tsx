import React from 'react';
import classNames from 'classnames';
import { Text } from '../Type';
import { Timeline } from './Timeline';
import type { ElementType } from 'react';
import type { FlexibleComponent } from '../../@types/FlexibleComponent';
import * as styles from './ProfessionalExperienceRole.module.css';

type Props = {
  className?: string;
  title: string;
  yearFrom: string;
  yearTo?: string;
};

export const ProfessionalExperienceRole = <T extends ElementType = 'div'>(props: FlexibleComponent<T, Props>) => {
  const { component: Component = 'div', className, title, yearFrom, yearTo, ...rest } = props;
  const classes = classNames(styles.role, className);
  return (
    <Component className={classes} {...rest}>
      <Text component="h5" className={styles.title}>
        {title}{' '}
        <Timeline className={styles.timeline} parenthesesClassName={styles.parentheses}>
          {yearFrom} &mdash; {yearTo ?? 'Present'}
        </Timeline>
      </Text>
    </Component>
  );
};
