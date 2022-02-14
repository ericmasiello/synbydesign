import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../Type';
import Timeline from './Timeline';
import * as styles from './ProfessionalExperienceRole.module.css';

function ProfessionalExperienceRole(props) {
  const { as: Component, className, title, yearFrom, yearTo, ...rest } = props;
  const classes = classNames(styles.role, className);
  return (
    <Component className={classes} {...rest}>
      <Text as="h5" className={styles.title}>
        {title}{' '}
        <Timeline className={styles.timeline} parenthesesClassName={styles.parentheses}>
          {yearFrom} &mdash; {yearTo ?? 'Present'}
        </Timeline>
      </Text>
    </Component>
  );
}

ProfessionalExperienceRole.defaultProps = {
  as: 'div',
};

ProfessionalExperienceRole.propTypes = {
  as: PropTypes.elementType,
};

export default ProfessionalExperienceRole;
