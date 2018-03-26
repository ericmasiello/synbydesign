import * as React from 'react';
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeSkills from './ResumeSkills';
import ProfessionalExperience from './ProfessionalExperience';
import RelatedExperience from './RelatedExperience';
import EducationExperience from './EducationExperience';
import TypeBase from './TypeBase';
import { pxToRem } from '../styles/utils';
import {
  maxWidth,
  COLORS,
  HEADER_WEIGHTS,
  MEDIA_QUERIES,
} from '../styles/vars';

interface Props extends Resume {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  professionalExperience: ProfessionalExperience[];
  relatedExperience: RelatedExperience[];
  education: Education[];
  tag: Tag;
}

export const Resume: React.SFC<Props> = props => {
  const {
    tag: Tag,
    className,
    name,
    title,
    lead,
    skills,
    professionalExperience,
    relatedExperience,
    education,
    ...rest
  } = props as Props & DefaultProps;
  return (
    <Tag className={className} {...rest}>
      <ResumeHeader
        name={name}
        title={title}
        lead={lead}
        className="resume__header"
      />
      <section className="resume__skills">
        <TypeBase tag="h2" className="resume__title">
          Technical Skills
        </TypeBase>
        <ResumeSkills skills={skills} />
      </section>
      <section className="resume__experience">
        <TypeBase tag="h2" className="resume__title">
          Professional Experience
        </TypeBase>
        {professionalExperience.map(experience => (
          <ProfessionalExperience
            key={experience.organization}
            {...experience}
          />
        ))}
      </section>
      <section className="resume__freelance">
        <TypeBase tag="h2" className="resume__title">
          Freelance &amp; Related Experience
        </TypeBase>
        {relatedExperience.map(experience => (
          <RelatedExperience
            key={`${experience.title}${experience.role!.yearFrom}`}
            {...experience}
          />
        ))}
      </section>
      <section className="resume__education">
        <TypeBase tag="h2" className="resume__title">
          Education &amp; Training
        </TypeBase>
        {education.map(edu => (
          <EducationExperience key={edu.institution} {...edu} />
        ))}
      </section>
    </Tag>
  );
};

Resume.defaultProps = {
  tag: 'section',
  professionalExperience: [],
  relatedExperience: [],
  education: [],
} as DefaultProps;

Resume.displayName = 'Resume';

export default styled(Resume)`
  display: grid;
  grid-template-areas:
    'header'
    'skills'
    'experience'
    'freelance'
    'education';
  grid-gap: 1.25rem 2rem;
  max-width: ${pxToRem(maxWidth)};
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${pxToRem(MEDIA_QUERIES.xlarge)}) {
    grid-template-areas:
      'header header'
      'skills skills'
      'experience freelance'
      'experience education';
  }

  .resume__header {
    grid-area: header;
  }

  .resume__skills {
    grid-area: skills;
  }

  .resume__experience {
    grid-area: experience;
    border-right: 1px solid ${COLORS.galleryBorder};
    padding-right: 1rem;
  }

  .resume__freelance {
    grid-area: freelance;
  }

  .resume__education {
    grid-area: education;
  }

  .resume__title {
    text-transform: uppercase;
    font-weight: ${HEADER_WEIGHTS.bold};
    margin-bottom: 0.5rem;
  }
`;
