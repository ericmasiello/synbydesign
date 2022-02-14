import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlainList from '../PlainList';
import { Text } from '../Type';
import Timeline from './Timeline';
import * as styles from './Talks.module.css';

function Talks(props) {
  const { as, talks, className, ...rest } = props;
  const classes = classNames(styles.talks, className);
  return (
    <PlainList as={as} className={classes} {...rest}>
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
            <Text as="h4" className={styles.title}>
              {talk.url ? <a href={talk.url}>{composedTitle}</a> : talk.title}
            </Text>
            {talk.description}
          </li>
        );
      })}
    </PlainList>
  );
}

Talks.defaultProps = {
  talks: [],
};

Talks.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      year: PropTypes.string,
    })
  ),
};

export default Talks;
