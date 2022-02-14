import React from 'react';
import PropTypes from 'prop-types';
import { Text, Muted } from '../Type';
import * as styles from './EducationExperience.module.css';

function EducationExperience(props) {
  const { as: Component, className, institution, location, year, degree, ...rest } = props;
  return (
    <Component className={className} {...rest}>
      <Text component="h4" className={styles.title}>
        {institution}
        <div className={styles.meta} data-meta>
          {location && <React.Fragment>{`${location} `}</React.Fragment>}
          {year && (
            <Text small component={Muted} data-year>
              ({year})
            </Text>
          )}
        </div>
      </Text>
      {degree && <p data-degree>{degree}</p>}
    </Component>
  );
}

EducationExperience.defaultProps = {
  as: 'article',
};

EducationExperience.propTypes = {
  as: PropTypes.elementType,
};

export default EducationExperience;
