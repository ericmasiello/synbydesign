import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

interface Props {
  title?: string;
  skills?: string[];
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  title: string;
  skills: string[];
  tag: Tag;
}

export const ResumeSkills: React.SFC<Props> = props => {
  const { tag, title, skills, className, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag tag={tag} className={className} {...rest}>
      <h2>{title}</h2>
      <ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </Tag>
  );
};

ResumeSkills.defaultProps = {
  title: 'Skills',
  skills: [],
  tag: 'section',
} as DefaultProps;

ResumeSkills.displayName = 'Resume.Skills';

export default styled(ResumeSkills)``;
