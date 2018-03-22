import * as React from 'react';
import styled from 'styled-components';

interface Props {
  skills?: string[];
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  skills: string[];
  tag: Tag;
}

export const ResumeSkills: React.SFC<Props> = props => {
  const { tag: Tag, skills, className, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag className={className} {...rest}>
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </Tag>
  );
};

ResumeSkills.defaultProps = {
  skills: [],
  tag: 'ul',
} as DefaultProps;

ResumeSkills.displayName = 'Resume.Skills';

export default styled(ResumeSkills)``;
