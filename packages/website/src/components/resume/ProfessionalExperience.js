import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { H } from '../Type'
import PlainList from '../PlainList';
import ProfessionalExperienceRole from './ProfessionalExperienceRole';
import styles from './ProfessionalExperience.module.css';

function ProfessionalExperience(props) {
  const {
    as: Component,
    className,
    organization,
    roles,
    accomplishments,
    ...rest
  } = props;
  const classes = classNames(styles.experience, className);
  return (
    <Component className={classes} {...rest}>
      <hgroup>
          <H tag="h1" className={styles.org}>
            {organization}
          </H>
          {roles.map(role => (
            <ProfessionalExperienceRole {...role} key={role.title} />
          ))}
        </hgroup>
        {accomplishments.length > 0 && (
          <div>
            <PlainList>
              {accomplishments.map(accomplishment => (
                <li key={accomplishment}>{accomplishment}</li>
              ))}
            </PlainList>
          </div>
        )}
    </Component>
  );
}

ProfessionalExperience.defaultProps = {
  as: 'article'
}

ProfessionalExperience.propTypes = {
  as: PropTypes.elementType,
}

export default ProfessionalExperience;
