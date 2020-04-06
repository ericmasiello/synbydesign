import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlainList from '../PlainList';
import { Text, Muted } from '../Type';
import RelatedExperienceWebsite from './RelatedExperienceWebsite';
import styles from './RelatedExperience.module.css';

function RelatedExperience(props) {
  const { as: Component, className, title, meta, role, website, accomplishments, ...rest } = props;
  const classes = classNames(styles.experience, className);
  const years = role.yearFrom && role.yearTo ? `${role.yearFrom} — ${role.yearTo}` : role.yearFrom;
  return (
    <Component className={classes} {...rest}>
      <hgroup>
        <Text as="h4" data-title className={styles.title}>
          <span className={styles.titleContent} data-title-content dangerouslySetInnerHTML={{ __html: title }} />{' '}
          {years && (
            <Text small as={Muted}>
              ({years})
            </Text>
          )}
        </Text>
        {meta && (
          <Text small as="p" data-meta className={styles.meta}>
            {meta}
          </Text>
        )}
        <Text as="h5" data-role-title className={styles.role}>
          {role.title}
        </Text>
        {website && <RelatedExperienceWebsite {...website} className={styles.website} />}
      </hgroup>
      {accomplishments.length > 0 && (
        <section>
          <PlainList>
            {accomplishments.map((accomplishment) => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </PlainList>
        </section>
      )}
    </Component>
  );
}

RelatedExperience.defaultProps = {
  as: 'article',
};

RelatedExperience.propTypes = {
  as: PropTypes.elementType,
};

export default RelatedExperience;
