import * as React from 'react';
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeSkills from './ResumeSkills';
import ProfessionalExperience from './ProfessionalExperience';
import RelatedExperience from './RelatedExperience';
import EducationExperience from './EducationExperience';

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
      <ResumeHeader name={name} title={title} lead={lead} />
      <ResumeSkills title="Technical Skills" skills={skills} />
      <section>
        <h2>Professional Experience</h2>
        {professionalExperience.map(experience => (
          <ProfessionalExperience
            key={experience.organization}
            {...experience}
          />
        ))}
      </section>
      <section>
        <h2>Freelance &amp; Related Experience</h2>
        {relatedExperience.map(experience => (
          <RelatedExperience key={experience.title} {...experience} />
        ))}
      </section>
      <section>
        <h2>Education &amp; Training</h2>
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
  border: 1px solid #ccc;
  padding: 5px;
`;
