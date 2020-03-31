import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResumeHeader from './ResumeHeader';
import ResumeSkills from './ResumeSkills';
import ProfessionalExperience from './ProfessionalExperience';
import RelatedExperience from './RelatedExperience';
import EducationExperience from './EducationExperience';
import { Text } from '../Type';
import styles from './Resume.module.css';

function Resume(props) {
  const {
    as: Component,
    ownerName,
    ownerTitle,
    lead,
    professionalExperience,
    relatedExperience,
    education,
    skills,
    className,
    ...rest
  } = props;
  const classes = classNames(styles.resume, className);
  return (
    <Component className={classes} {...rest}>
      <ResumeHeader className={styles.header} ownerName={ownerName} ownerTitle={ownerTitle} lead={lead} />
      <section className={styles.skills}>
        <Text as="h2" className={styles.title}>
          Technical Skills
        </Text>
        <ResumeSkills skills={skills} />
      </section>
      <section className={styles.experience}>
        <Text as="h2" className={styles.title}>
          Professional Experience
        </Text>
        {professionalExperience.map((experience) => (
          <ProfessionalExperience key={experience.organization} {...experience} />
        ))}
      </section>
      <section className={styles.freelance}>
        <Text as="h2" className={styles.title}>
          Freelance &amp; Related Experience
        </Text>
        {relatedExperience.map((experience) => (
          <RelatedExperience
            key={`${experience.title}${experience.role.title}${experience.role.yearFrom}`}
            {...experience}
          />
        ))}
      </section>
      <section className={styles.education}>
        <Text as="h2" className={styles.title}>
          Education &amp; Training
        </Text>
        {education.map((edu) => (
          <EducationExperience key={edu.institution} {...edu} />
        ))}
      </section>
    </Component>
  );
}

Resume.defaultProps = {
  as: 'div',
  education: [],
  professionalExperience: [],
  relatedExperience: [],
};

Resume.propTypes = {
  as: PropTypes.elementType,
  ownerName: PropTypes.string,
  ownerTitle: PropTypes.string,
  lead: PropTypes.string,
  professionalExperience: PropTypes.arrayOf(
    PropTypes.shape({
      accomplishments: PropTypes.arrayOf(PropTypes.string),
      organization: PropTypes.string,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          yearFrom: PropTypes.string,
          yearTo: PropTypes.string,
        })
      ),
    })
  ),
  relatedExperience: PropTypes.arrayOf(
    PropTypes.shape({
      accomplishments: PropTypes.arrayOf(PropTypes.string),
      meta: PropTypes.string,
      role: PropTypes.shape({
        title: PropTypes.string,
        yearFrom: PropTypes.string,
        yearTo: PropTypes.string,
      }),
      title: PropTypes.string,
      website: PropTypes.shape({
        url: PropTypes.string,
      }),
    })
  ),
  skills: PropTypes.arrayOf(PropTypes.string),
  education: PropTypes.shape({
    degree: PropTypes.string,
    institution: PropTypes.string,
    location: PropTypes.string,
    year: PropTypes.string,
  }),
};

export default Resume;
