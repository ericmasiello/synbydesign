import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text, Muted } from '../Type';
import styles from './ProfessionalExperienceRole.module.css';

function Timeline({ from: fromDate, to: toDate = 'Present' }) {
  return (
    <Text small as={Muted} className={styles.timeline}>
      <span className={styles.parentheses}>(</span>
      {fromDate} &mdash; {toDate}
      <span className={styles.parentheses}>)</span>
    </Text>
  );
}

function ProfessionalExperienceRole(props) {
  const {
    as: Component,
    className,
    title,
    yearFrom,
    yearTo,
    ...rest
  } = props;
  const classes = classNames(styles.role, className);
  return (
    <Component className={classes} {...rest}>
      <Text as="h2" className={styles.title}>
        {title} <Timeline from={yearFrom} to={yearTo} />
      </Text>
    </Component>
  );
}

ProfessionalExperienceRole.defaultProps = {
  as: 'div'
}

ProfessionalExperienceRole.propTypes = {
  as: PropTypes.elementType,
}

export default ProfessionalExperienceRole;
