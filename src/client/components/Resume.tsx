import * as React from 'react';
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeSkills from './ResumeSkills';
import ProfessionalExperience from './ProfessionalExperience';
import RelatedExperience from './RelatedExperience';
import EducationExperience from './EducationExperience';
import Type5 from './Type5';

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
      <section>
        <Type5 tag="h2" className="resume__title">
          Technical Skills
        </Type5>
        <ResumeSkills skills={skills} />
      </section>
      <section>
        <Type5 tag="h2" className="resume__title">
          Professional Experience
        </Type5>
        {professionalExperience.map(experience => (
          <ProfessionalExperience
            key={experience.organization}
            {...experience}
          />
        ))}
      </section>
      <section>
        <Type5 tag="h2" className="resume__title">
          Freelance &amp; Related Experience
        </Type5>
        {relatedExperience.map(experience => (
          <RelatedExperience key={experience.title} {...experience} />
        ))}
      </section>
      <section>
        <Type5 tag="h2" className="resume__title">
          Education &amp; Training
        </Type5>
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

  .resume__title {
    text-transform: uppercase;
  }
`;
